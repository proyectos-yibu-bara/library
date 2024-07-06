import { DataTypes, Model, Optional } from 'sequelize';
import { getInstance } from '../config/db.js';

const sequelize = getInstance();

interface ImageAttributes {
  imageId: number;
  title: string;
  url: string;
}

interface ImageCreationAttributes extends Optional<ImageAttributes, 'imageId'> {}

class Image extends Model<ImageAttributes, ImageCreationAttributes> implements ImageAttributes {
  public imageId!: number;
  public title!: string;
  public url!: string;
}

Image.init(
  {
    imageId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    url: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: 'image',
    sequelize,
    timestamps: false,
  },
);

export default Image;
