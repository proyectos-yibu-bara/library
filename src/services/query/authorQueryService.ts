import { Author } from '../../models';

const getAllAuthors = async (): Promise<Author[]> => {
  const authors = await Author.findAll();
  return authors;
};

const getAuthorById = async (id: number): Promise<Author | null> => {
 const author = await Author.findByPk(id);
 return author;
};

export default {
  getAllAuthors,
  getAuthorById,
};
