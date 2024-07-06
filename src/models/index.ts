import Book from './bookModel.js';
import Author from './authorModel.js';
import Category from './categoryModel.js';
import Image from './imageModel.js';
import BookAuthor from './bookAuthorModel.js';
import BookCategory from './bookCategoryModel.js';
import BookImage from './bookImageModel.js';

// Define relationships
Book.belongsToMany(Author, { through: BookAuthor, foreignKey: 'bookId' });
Author.belongsToMany(Book, { through: BookAuthor, foreignKey: 'authorId' });

Book.belongsToMany(Category, { through: BookCategory, foreignKey: 'bookId' });
Category.belongsToMany(Book, { through: BookCategory, foreignKey: 'categoryId' });

Book.belongsToMany(Image, { through: BookImage, foreignKey: 'bookId' });
Image.belongsToMany(Book, { through: BookImage, foreignKey: 'imageId' });

export {
  Book,
  Author,
  Category,
  Image,
  BookAuthor,
  BookCategory,
  BookImage,
};
