import { Request, Response } from 'express';
import services from '../services';
import { parseBooleanQueryParam } from './utils';

/**
 * GET /
 * All categories.
 */
export const getAll = async (req: Request, res: Response): Promise<void> => {
  
  const { includeInactives } = req.query;
  
  const booleanIncludeInactives = parseBooleanQueryParam(includeInactives as string);
  
  services.log.info(`booleanIncludeInactives -> ${booleanIncludeInactives}`);

  const categories = await services.category.getAll(booleanIncludeInactives);

  
  res.json({ 
    data: {
      categories,
    },
   });
};
