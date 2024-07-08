import { Request, Response } from 'express';
import services from '../services';
import { 
  parseValueAsBoolean, 
  parseValueAsNumber, 
  parseValueAsNotEmptyString,
  parseValueAsDate,
} from './utils';

/**
 * GET /
 * All authors.
 */
export const getAll = async (_req: Request, res: Response): Promise<void> => {
  
  const authors = await services.author.getAll();

  res.json({ 
    data: {
      authors,
    },
   });
};

/**
 * GET /
 * Category by id.
 */
export const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const numberId = parseValueAsNumber(id);

  if (numberId === undefined || numberId <= 0)
  {
    res.status(400).json({
      message: "Invalid id", 
      data: null,
    });

    return;
  }

  services.log.info(`numberId -> ${numberId}`);

  try {
    const author = await services.author.getById(numberId);
    const statusCode = author === undefined ? 404 : 200;
    
    res.status(statusCode).json({
      data: author ?? null,
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal server error -> ${error.message}`,
      data: null,
    });
  }
};

/**
 * POST /
 * Create a category.
 */
export const add = async (req: Request, res: Response): Promise<void> => {
  const { name, birthday } = req.body;

  services.log.info(`Creating new author -> ${name}`);
  
  const stringName = parseValueAsNotEmptyString(name);
  const stringBirthday = parseValueAsNotEmptyString(birthday);

  if (stringName == undefined || stringBirthday == undefined) {
    res.status(400).json({
      message: "Incomplete data",
      data: null,
    });
    return;
  }
  
  const dateBityhday = parseValueAsDate(stringBirthday);
  
  
  if (dateBityhday == undefined) {
    res.status(400).json({
      message: "Invalid birthday",
      data: null,
    });
    return;
  }


  try {
    const newAuthor = await services.author.add({ name: stringName, birthday: dateBityhday });

    if (newAuthor === undefined) {
      res.status(400).json({
        message: "Author already exists",
        data: null,
      });
      return;
    }

    res.status(201).json({
      data: { category: newAuthor },
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal server error -> ${error.message}`,
      data: null,
    });
  }
};
