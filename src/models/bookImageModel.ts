import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface BookImageAttributes {
  bookImageId: number;
  bookId: number;
  imageId: number;
}

interface BookImageCreationAttributes extends Optional<BookImageAttributes, 'bookImageId'> {}

class BookImage extends Model<BookImageAttributes, BookImageCreationAttributes> implements BookImageAttributes {
  public bookImageId!: number;
  public bookId!: number;
  public imageId!: number;
}

BookImage.init(
  {
    bookImageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    bookId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    imageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'book_image',
    sequelize,
    timestamps: false,
  },
);

export default BookImage;
