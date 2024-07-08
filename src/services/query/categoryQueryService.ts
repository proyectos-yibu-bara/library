import { Category } from '../../models';

const getAllCategories = async (): Promise<Category[]> => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id: number): Promise<Category | null> => {
 const category = await Category.findByPk(id);
 return category;
};

export default {
  getAllCategories,
  getCategoryById,
};
