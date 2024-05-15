import { Request, Response } from 'express';

/**
 * GET /
 * All categories.
 */
export const getAll = async (req: Request, res: Response): Promise<void> => {
  res.json({ 
    data: {
      categories: [],
    },
   });
};
