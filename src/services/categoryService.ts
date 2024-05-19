import { ICategory, ICategoryData } from "../interfaces/category";
import * as categoriesQuery from "../data/categoryQuery";
import * as categoriesCommand from "../data/categoryCommand";

export const getAll = async (includeInactives: boolean): Promise<ICategory[]> => {
  const categories = await categoriesQuery.getAllCategories(includeInactives);
  return categories;
};

export const getById = async (id: number): Promise<ICategory | undefined> => {
  const category = await categoriesQuery.getCategoryById(id);
  return category;
};

export const add = async (params: ICategoryData): Promise<ICategory | undefined> => {
  const newCategory = await categoriesCommand.addCategory(params);
  return newCategory;
};
