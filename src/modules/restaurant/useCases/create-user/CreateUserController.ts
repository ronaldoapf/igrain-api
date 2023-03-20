import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { name, email, password } = req.body;

    const response = await createUserUseCase.execute({ name, email, password });
    return res.status(201).json(response);
  }
}

export { CreateUserController };
