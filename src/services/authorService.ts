import { IAuthor, IAuthorData } from "../interfaces/author";
import authorsQuery from "./query/authorQueryService";
import authorsCommand from "./command/authorCommandService";

export const getAll = async (): Promise<IAuthor[]> => {
  const categories = await authorsQuery.getAllAuthors();
  return categories;
};

export const getById = async (id: number): Promise<IAuthor | null> => {
  const category = await authorsQuery.getAuthorById(id);
  return category;
};

export const add = async (params: IAuthorData): Promise<IAuthor | null> => {
  const newCategory = await authorsCommand.addAuthor(params);
  return newCategory;
};

export const update = async (id: number, params: IAuthorData): Promise<IAuthor | null> => {
  const newCategory = await authorsCommand.updateAuthor(id, params);
  return newCategory;
};
