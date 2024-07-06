import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface BookCategoryAttributes {
  bookCategoryId: number;
  bookId: number;
  categoryId: number;
}

interface BookCategoryCreationAttributes extends Optional<BookCategoryAttributes, 'bookCategoryId'> {}

class BookCategory extends Model<BookCategoryAttributes, BookCategoryCreationAttributes> implements BookCategoryAttributes {
  public bookCategoryId!: number;
  public bookId!: number;
  public categoryId!: number;
}

BookCategory.init(
  {
    bookCategoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    bookId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'book_category',
    sequelize,
    timestamps: false,
  },
);

export default BookCategory;
