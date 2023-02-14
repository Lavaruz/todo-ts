import { Response, Request } from "express";
import IController from "./ControllerInterface.js";

class TodosController implements IController {
  index(req: Request, res: Response): Response {
    return res.json("SHOW EVERY DATA IN DB");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    return res.json(`SHOW ID ${id}`);
  }
  create(req: Request, res: Response): Response {
    return res.json("CREATE COLUMN");
  }
  update(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("Method not implemented.");
  }
}

export default new TodosController();
