import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetRestaurantDetailsUseCase } from './GetRestaurantDetailsUseCase';

class GetRestaurantDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const getRestaurantDetailsUseCase = container.resolve(
      GetRestaurantDetailsUseCase
    );

    const response = await getRestaurantDetailsUseCase.execute(id);

    return res.status(200).json(response);
  }
}

export { GetRestaurantDetailsController };
