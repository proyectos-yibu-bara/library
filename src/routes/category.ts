import { Router } from "express";
import * as controller from "../controllers/category";

export const categoriesRouter = Router();

categoriesRouter.get("/", controller.getAll);
