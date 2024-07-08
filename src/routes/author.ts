import { Router } from "express";
import * as controller from "../controllers/authorController";

export const authorsRouter = Router();

authorsRouter.get("/", controller.getAll);
authorsRouter.get("/:id", controller.getById);
authorsRouter.post("/", controller.add);
