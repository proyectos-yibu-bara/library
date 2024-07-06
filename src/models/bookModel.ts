import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface BookAttributes {
  bookId: number;
  isbn: string;
  title: string;
  description?: string;
  material?: string;
  pageCount?: number;
  dimensions?: string;
  quantityAvailable: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'bookId'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public bookId!: number;
  public isbn!: string;
  public title!: string;
  public description?: string;
  public material?: string;
  public pageCount?: number;
  public dimensions?: string;
  public quantityAvailable!: number;
  public price!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public active!: boolean;
}

Book.init(
  {
    bookId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    isbn: {
      type: new DataTypes.STRING(80),
      allowNull: false,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING,
    },
    material: {
      type: new DataTypes.STRING(128),
    },
    pageCount: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    dimensions: {
      type: new DataTypes.STRING(128),
    },
    quantityAvailable: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'book',
    sequelize,
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
);

export default Book;
