import { ICategoryData, ICategory } from "../../interfaces/category";
import { Category } from "../../models";
import categoryQueryService from "../query/categoryQueryService";

const addCategory = async (categoryData: ICategoryData): Promise<ICategory> => {
    const category = await Category.create(categoryData);
    return category;
};

const updateCategory = async (
    categoryId: number,
    categoryData: ICategoryData,
): Promise<ICategory | null> => {
    const category = await categoryQueryService.getCategoryById(categoryId);

    if (category == null) return null;

    await category.update(categoryData);

    return category;
};

export default {
    addCategory,
    updateCategory,
};
