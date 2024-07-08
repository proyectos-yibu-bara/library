import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';
import { ICategory } from '../interfaces/category.js';

const sequelize = getInstance();

interface CategoryCreationAttributes extends Optional<ICategory, 'categoryId'> {}

class Category extends Model<ICategory, CategoryCreationAttributes> implements ICategory {
  public categoryId!: number;
  public title!: string;
  public description!: string;
}

Category.init(
  {
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'category',
    sequelize,
    timestamps: false,
  },
);

export default Category;
