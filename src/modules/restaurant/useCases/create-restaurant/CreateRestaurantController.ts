import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRestaurantUseCase } from './CreateRestaurantUseCase';

class CreateRestaurantController {
  async handle(req: Request, res: Response) {
    const restaurantCreateCase = container.resolve(CreateRestaurantUseCase);
    const dataAboutRestaurant = req.body;

    const response = await restaurantCreateCase.execute(dataAboutRestaurant);
    return res.status(201).json(response);
  }
}

export { CreateRestaurantController };
