import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface CategoryAttributes {
  categoryId: number;
  title: string;
  name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'categoryId'> {}

class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public categoryId!: number;
  public title!: string;
  public name!: string;
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
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
    sequelize,
    timestamps: false,
  },
);

export default Category;
