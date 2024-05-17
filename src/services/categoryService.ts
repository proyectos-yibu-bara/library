import { ICategory } from "../interfaces/category";

export const getAll = async (includeInactives: boolean): Promise<any[]> => {
  const a = [];
  return [];
};

export const getById = async (id: number): Promise<ICategory | undefined> => {
  if (id == 1) {
    return undefined;
  }

  return {
    title: "Category 1",
  };
};
