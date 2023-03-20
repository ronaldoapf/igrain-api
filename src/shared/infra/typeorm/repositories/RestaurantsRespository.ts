import { getRepository, Repository } from 'typeorm';

import { ICreateRestaurantDTO } from '@modules/restaurant/dtos/ICreateRestaurantDTO';
import { IRestaurant } from '@modules/restaurant/entities/Restaurant';
import { IRestaurantRepository } from '@modules/restaurant/repositories/IRestaurantRepository';
import { Maybe } from '@shared/types/Maybe';

import { Restaurant } from '../entities/Restaurant';

class RestaurantRepository implements IRestaurantRepository {
  private repository: Repository<Restaurant>;

  constructor() {
    this.repository = getRepository(Restaurant);
  }

  async create({
    name,
    image,
    description,
  }: ICreateRestaurantDTO): Promise<IRestaurant> {
    const restaurant = this.repository.create({
      name,
      description,
      image,
    });

    await this.repository.save(restaurant);
    return restaurant;
  }

  async find(search?: string): Promise<IRestaurant[]> {
    if (!search) {
      return this.repository.find();
    }

    const restaurants = this.repository
      .createQueryBuilder('restaurant')
      .select()
      .distinct()
      .leftJoin(
        'restaurant.dishes',
        'dish',
        'restaurant.id = dish.restaurant_id'
      )
      .where('LOWER(restaurant.name) like LOWER(:search)', {
        search: `%${search}%`,
      })
      .orWhere('LOWER(dish.name) like LOWER(:search)', {
        search: `%${search}%`,
      })
      .orWhere('LOWER(dish.description) like LOWER(:search)', {
        search: `%${search}%`,
      })
      .getMany();

    return restaurants;
  }

  async findById(id: string): Promise<Maybe<IRestaurant>> {
    const restaurant = await this.repository.findOne(id, {
      relations: ['dishes'],
    });
    return restaurant;
  }
}

export { RestaurantRepository };
