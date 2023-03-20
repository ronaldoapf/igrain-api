import { inject, injectable } from 'tsyringe';

import { IRestaurant } from '@modules/restaurant/entities/Restaurant';
import { IRestaurantRepository } from '@modules/restaurant/repositories/IRestaurantRepository';

@injectable()
class GetRestaurantUseCase {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  async execute(search?: string): Promise<IRestaurant[]> {
    const restaurant = await this.restaurantRepository.find(search);
    return restaurant;
  }
}

export { GetRestaurantUseCase };
