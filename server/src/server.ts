import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

// Router
import todosRouter from "./routes/TodosRoute.js";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  plugins(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
  }

  routes(): void {
    this.app.use("/api/v1/todos", todosRouter);
  }
}

const app = new App().app;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server runing at port PORT`));
