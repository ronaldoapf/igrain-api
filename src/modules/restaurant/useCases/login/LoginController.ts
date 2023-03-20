import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LoginUseCase } from './LoginUseCase';

class LoginController {
  async handle(req: Request, res: Response) {
    const loginUseCase = container.resolve(LoginUseCase);
    const { email, password } = req.body;

    const response = await loginUseCase.execute({ email, password });
    return res.status(201).json(response);
  }
}

export { LoginController };
