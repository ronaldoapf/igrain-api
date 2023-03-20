import { container } from 'tsyringe';

import { RestaurantRepository } from '@shared/infra/typeorm/repositories/RestaurantsRespository';
import { UsersRepository } from '@shared/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<UsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<RestaurantRepository>(
  'RestaurantRepository',
  RestaurantRepository
);
