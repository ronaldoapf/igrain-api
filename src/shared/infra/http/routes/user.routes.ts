import { Router } from 'express';
import { z } from 'zod';

import { CreateUserController } from '@modules/restaurant/useCases/create-user/CreateUserController';

import payloadValidator from '../middlewares/payloadValidator';

const createUserController = new CreateUserController();

const userRoutes = Router();

const createUserValidation = z.object({
  name: z.string(),
  email: z.string().email('Invalid email'),
  password: z.string().min(7, 'At least 7 characters'),
});

userRoutes.post(
  '/',
  payloadValidator(createUserValidation),
  createUserController.handle
);

export { userRoutes };
