import { ICategory, ICategoryData } from "../interfaces/category";
import * as categoriesQuery from "../data/categoryQuery";

export const getAll = async (includeInactives: boolean): Promise<ICategory[]> => {
  const categories = await categoriesQuery.getAllCategories(includeInactives);
  return categories;
};

export const getById = async (id: number): Promise<ICategory | undefined> => {
  const category = await categoriesQuery.getCategoryById(id);
  return category;
};

export const updateById = async (id: number, params: ICategoryData): Promise<ICategory | undefined> => {
  if (id == 1) {
    return undefined;
  }

  
};
