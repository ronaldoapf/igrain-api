import { Router } from 'express';
import { z } from 'zod';

import { LoginController } from '@modules/restaurant/useCases/login/LoginController';

import payloadValidator from '../middlewares/payloadValidator';

const loginController = new LoginController();

const authRoutes = Router();

const loginValidation = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(7, 'At least 7 characters'),
});

authRoutes.post('/', payloadValidator(loginValidation), loginController.handle);

export { authRoutes };
