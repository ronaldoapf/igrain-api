import { getRepository, MigrationInterface } from 'typeorm';

import { Restaurant } from '../entities/Restaurant';
import { restaurantList } from './seed-data/restaurant';

export class seedRestaurants1679239151020 implements MigrationInterface {
  public async up(): Promise<void> {
    const restaurantRepository = getRepository(Restaurant);
    await restaurantRepository.save(restaurantList);
  }

  public async down(): Promise<void> {}
}
