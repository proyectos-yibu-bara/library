import { Router } from "express";
import * as controller from "../controllers/categoryController";

export const categoriesRouter = Router();

categoriesRouter.get("/", controller.getAll);
