import { Maybe } from '@shared/types/Maybe';

import { ICreateRestaurantDTO } from '../dtos/ICreateRestaurantDTO';
import { IRestaurant } from '../entities/Restaurant';

export interface IRestaurantRepository {
  create(data: ICreateRestaurantDTO): Promise<IRestaurant>;
  find(name?: string): Promise<IRestaurant[]>;
  findById(id: string): Promise<Maybe<IRestaurant>>;
}
