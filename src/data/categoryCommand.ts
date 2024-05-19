import { ICategoryData, ICategory } from '../interfaces/category';
import { pushNewCategory } from './mocks/categories';

export const addCategory = (params: ICategoryData): Promise<ICategory> => {
  return new Promise((resolve) => {
    const newCategory = pushNewCategory(params);
    resolve(newCategory);
  });
};
