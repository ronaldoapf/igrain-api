import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetRestaurantUseCase } from './GetRestaurantUseCase';

class GetRestaurantController {
  async handle(req: Request, res: Response) {
    const restaurantCreateCase = container.resolve(GetRestaurantUseCase);
    const { search } = req.query;

    const response = await restaurantCreateCase.execute(search as string);
    return res.status(201).json(response);
  }
}

export { GetRestaurantController };
