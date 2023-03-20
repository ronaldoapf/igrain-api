import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { IRestaurant } from '@modules/restaurant/entities/Restaurant';

import { Dish } from './Dish';

@Entity({ name: 'restaurant' })
class Restaurant implements IRestaurant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @OneToMany(() => Dish, (dish) => dish.restaurant, { cascade: true })
  dishes: Dish[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Restaurant };
