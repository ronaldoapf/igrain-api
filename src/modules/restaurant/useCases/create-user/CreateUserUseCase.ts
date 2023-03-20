import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/restaurant/dtos/ICreateUserDTO';
import { IUser } from '@modules/restaurant/entities/User';
import { IUsersRepository } from '@modules/restaurant/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

type Response = Omit<IUser, 'password'>;

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<Response> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (emailAlreadyExists) {
      throw new AppError('Email already taken.');
    }

    const { id, name, email } = await this.usersRepository.create(data);
    return { id, name, email };
  }
}

export { CreateUserUseCase };
