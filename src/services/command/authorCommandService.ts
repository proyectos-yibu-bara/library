import { IAuthorData, IAuthor } from "../../interfaces/author";
import { Author } from "../../models";
import authorQueryService from "../query/authorQueryService";

const addAuthor = async (authorData: IAuthorData): Promise<IAuthor> => {
    const author = await Author.create(authorData);
    return author;
};

const updateAuthor = async (
    authorId: number,
    authorData: IAuthorData,
): Promise<IAuthor | null> => {
    const author = await authorQueryService.getAuthorById(authorId);

    if (author == null) return null;

    await author.update(authorData);

    return author;
};

export default {
    addAuthor,
    updateAuthor,
};
