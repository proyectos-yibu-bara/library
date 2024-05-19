import { Router } from "express";
import * as controller from "../controllers/categoryController";

export const categoriesRouter = Router();

categoriesRouter.get("/", controller.getAll);
categoriesRouter.get("/:id", controller.getById);
categoriesRouter.post("/", controller.add);
