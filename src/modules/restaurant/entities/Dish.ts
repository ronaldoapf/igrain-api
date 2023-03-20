import { IRestaurant } from './Restaurant';

export interface IDish {
  id: string;
  name: string;
  image: string;
  unitPrice: number;
  description?: string;
  restaurantId: string;
  restaurant: IRestaurant;
}
