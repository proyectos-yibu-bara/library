import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface AuthorAttributes {
  authorId: number;
  name: string;
  birthday: Date;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'authorId'> {}

class Author extends Model<AuthorAttributes, AuthorCreationAttributes> implements AuthorAttributes {
  public authorId!: number;
  public name!: string;
  public birthday!: Date;
}

Author.init(
  {
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'author',
    sequelize,
    timestamps: false,
  },
);

export default Author;
