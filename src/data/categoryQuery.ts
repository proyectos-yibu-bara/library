import { ICategory } from '../interfaces/category';
import { categoriesMock } from './mocks/categories';

export const getAllCategories = (includeInactives: boolean): Promise<ICategory[]> => {
  return new Promise((resolve) => {
    const filteredCategories = categoriesMock.filter(category => 
      includeInactives || category.active,
    );
    resolve(filteredCategories);
  });
};

export const getCategoryById = (id: number): Promise<ICategory | undefined> => {
  return new Promise((resolve) => {
    const category = categoriesMock.find(c => c.id === id);
    resolve(category);
  });
};
