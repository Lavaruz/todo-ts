import { Router } from "express";
import TodosController from "../controllers/TodosController.js";

const todosRouter = Router();

todosRouter.get("/", TodosController.index);
todosRouter.get("/:id", TodosController.show);
todosRouter.delete("/", TodosController.delete);
todosRouter.put("/", TodosController.update);
todosRouter.post("/", TodosController.create);

export default todosRouter;
