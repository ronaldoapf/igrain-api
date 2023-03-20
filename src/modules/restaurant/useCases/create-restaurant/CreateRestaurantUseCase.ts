import { inject, injectable } from 'tsyringe';

import { ICreateRestaurantDTO } from '@modules/restaurant/dtos/ICreateRestaurantDTO';
import { IRestaurant } from '@modules/restaurant/entities/Restaurant';
import { IRestaurantRepository } from '@modules/restaurant/repositories/IRestaurantRepository';

type Response = IRestaurant;

@injectable()
class CreateRestaurantUseCase {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  async execute(data: ICreateRestaurantDTO): Promise<Response> {
    const restaurant = await this.restaurantRepository.create(data);
    return restaurant;
  }
}

export { CreateRestaurantUseCase };
