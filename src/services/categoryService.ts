import { ICategory, ICategoryData } from "../interfaces/category";
import categoriesQuery from "./query/categoryQueryService";
import categoriesCommand from "./command/categoryCommandService";

export const getAll = async (): Promise<ICategory[]> => {
  const categories = await categoriesQuery.getAllCategories();
  return categories;
};

export const getById = async (id: number): Promise<ICategory | null> => {
  const category = await categoriesQuery.getCategoryById(id);
  return category;
};

export const add = async (params: ICategoryData): Promise<ICategory | null> => {
  const newCategory = await categoriesCommand.addCategory(params);
  return newCategory;
};

export const update = async (id: number, params: ICategoryData): Promise<ICategory | null> => {
  const newCategory = await categoriesCommand.updateCategory(id, params);
  return newCategory;
};
