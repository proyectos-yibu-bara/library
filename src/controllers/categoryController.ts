import { Request, Response } from 'express';
import services from '../services';
import { 
  parseValueAsBoolean, 
  parseValueAsNumber, 
  parseValueAsNotEmptyString,
} from './utils';

/**
 * GET /
 * All categories.
 */
export const getAll = async (req: Request, res: Response): Promise<void> => {
  
  const { includeInactives } = req.query;
  
  const booleanIncludeInactives = parseValueAsBoolean(includeInactives as string);

  if (booleanIncludeInactives == undefined) {
    res.status(400).json({
      message: "Invalid parameter", 
      data: null,
     });
    return;
  }
  
  services.log.info(`booleanIncludeInactives -> ${booleanIncludeInactives}`);

  const categories = await services.category.getAll(booleanIncludeInactives);

  
  res.json({ 
    data: {
      categories,
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
    const category = await services.category.getById(numberId);
    const statusCode = category === undefined ? 404 : 200;
    
    res.status(statusCode).json({
      data: category ?? null,
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
  const { title, active } = req.body;

  const booleanActive = parseValueAsBoolean(active as string);
  const stringTitle = parseValueAsNotEmptyString(title);

  if (booleanActive === undefined || stringTitle === undefined) {
    res.status(400).json({
      message: "There are invalid params",
      data: null,
    });
    return;
  }

  services.log.info(`Creating new category -> ${title}`);

  try {
    const newCategory = await services.category.add({ title: stringTitle, active: booleanActive });

    if (newCategory === undefined) {
      res.status(400).json({
        message: "Category already exists",
        data: null,
      });
      return;
    }

    res.status(201).json({
      data: { category: newCategory },
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal server error -> ${error.message}`,
      data: null,
    });
  }
};
