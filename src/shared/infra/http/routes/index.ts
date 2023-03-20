import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { restaurantRoutes } from './restaurant.routes';
import { userRoutes } from './user.routes';

const appRouter = Router();

appRouter.use('/user', userRoutes);
appRouter.use('/auth', authRoutes);
appRouter.use('/restaurant', restaurantRoutes);

export default appRouter;
