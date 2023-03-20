import { Router } from 'express';
import { z } from 'zod';

import { CreateRestaurantController } from '@modules/restaurant/useCases/create-restaurant/CreateRestaurantController';
import { GetRestaurantDetailsController } from '@modules/restaurant/useCases/get-restaurant-details/GetRestaurantDetailsController';
import { GetRestaurantController } from '@modules/restaurant/useCases/get-restaurant/GetRestaurantController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import payloadValidator from '../middlewares/payloadValidator';

const createRestaurantController = new CreateRestaurantController();
const getRestaurantController = new GetRestaurantController();
const getRestaurantDetailsController = new GetRestaurantDetailsController();

const restaurantRoutes = Router();

const createRestaurantValidation = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
});

restaurantRoutes.post(
  '/',
  payloadValidator(createRestaurantValidation),
  createRestaurantController.handle
);

restaurantRoutes.use(ensureAuthenticated);
restaurantRoutes.get('/', getRestaurantController.handle);
restaurantRoutes.get('/:id', getRestaurantDetailsController.handle);

export { restaurantRoutes };
