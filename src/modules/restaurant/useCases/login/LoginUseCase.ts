import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUser } from '@modules/restaurant/entities/User';
import { IUsersRepository } from '@modules/restaurant/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

type Request = { email: string; password: string };
type Response = { token: string; user: Omit<IUser, 'password'> };
@injectable()
class LoginUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError('Incorrect credentials.', 401);
    }

    const { name, email, password, id } = user;

    const passwordsMatch = compareSync(data.password, password);

    if (!passwordsMatch) {
      throw new AppError('Incorrect credentials.', 401);
    }

    const token = sign({ email }, String(process.env.TOKEN_SECRET), {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
      subject: id,
    });

    return {
      token,
      user: {
        id,
        name,
        email,
      },
    };
  }
}

export { LoginUseCase };
