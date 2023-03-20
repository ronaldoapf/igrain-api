import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { IDish } from '@modules/restaurant/entities/Dish';
import { IRestaurant } from '@modules/restaurant/entities/Restaurant';

import { Restaurant } from './Restaurant';

@Entity({ name: 'dish' })
class Dish implements IDish {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column({ name: 'unit_price' })
  unitPrice: number;

  @Column()
  image: string;

  @Column({ name: 'restaurant_id' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.dishes)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: IRestaurant;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Dish };
