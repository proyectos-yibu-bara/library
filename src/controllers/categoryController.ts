import { Request, Response } from 'express';
import services from '../services';
import { parseBooleanQueryParam, parseNumberParam } from './utils';

/**
 * GET /
 * All categories.
 */
export const getAll = async (req: Request, res: Response): Promise<void> => {
  
  const { includeInactives } = req.query;
  
  const booleanIncludeInactives = parseBooleanQueryParam(includeInactives as string);

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

  const numberId = parseNumberParam(id);

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
 * PUT /:id
 * Update category by id.
 */
export const updateById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, active } = req.body;
  const numberId = parseNumberParam(id);

  if (numberId === undefined) {
    res.status(400).json({
      message: "Invalid id",
      data: null,
    });
    return;
  }

  services.log.info(`numberId -> ${numberId}`);

  try {
    const updatedCategory = await services.category.updateById(numberId, { title, active });

    if (updatedCategory === null) {
      res.status(404).json({
        message: "Category not found",
        data: null,
      });
      return;
    }

    res.status(200).json({
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal server error -> ${error.message}`,
      data: null,
    });
  }
};
