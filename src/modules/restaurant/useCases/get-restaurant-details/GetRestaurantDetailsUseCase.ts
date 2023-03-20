import { inject, injectable } from 'tsyringe';

import { IRestaurantRepository } from '@modules/restaurant/repositories/IRestaurantRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class GetRestaurantDetailsUseCase {
  constructor(
    @inject('RestaurantRepository')
    private restaurantsRepository: IRestaurantRepository
  ) {}

  async execute(id: string) {
    const restaurant = await this.restaurantsRepository.findById(id);

    if (!restaurant) {
      throw new AppError('Restaurant not found.', 404);
    }

    return restaurant;
  }
}

export { GetRestaurantDetailsUseCase };
