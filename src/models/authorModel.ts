import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';
import { IAuthor } from '../interfaces/author.js';

const sequelize = getInstance();

interface AuthorCreationAttributes extends Optional<IAuthor, 'authorId'> {}

class Author extends Model<IAuthor, AuthorCreationAttributes> implements IAuthor {
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
