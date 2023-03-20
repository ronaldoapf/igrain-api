import { IDish } from './Dish';

export interface IRestaurant {
  id: string;
  name: string;
  image: string;
  dishes: IDish[];
  description: string;
}
