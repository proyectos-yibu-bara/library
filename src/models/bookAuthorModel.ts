import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface BookAuthorAttributes {
  bookAuthorId: number;
  bookId: number;
  authorId: number;
}

interface BookAuthorCreationAttributes extends Optional<BookAuthorAttributes, 'bookAuthorId'> {}

class BookAuthor extends Model<BookAuthorAttributes, BookAuthorCreationAttributes> implements BookAuthorAttributes {
  public bookAuthorId!: number;
  public bookId!: number;
  public authorId!: number;
}

BookAuthor.init(
  {
    bookAuthorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    bookId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'book_authors',
    sequelize,
    timestamps: false,
  },
);

export default BookAuthor;
