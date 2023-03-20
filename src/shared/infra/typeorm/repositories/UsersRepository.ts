import { hashSync } from 'bcrypt';
import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/restaurant/dtos/ICreateUserDTO';
import { IUser } from '@modules/restaurant/entities/User';
import { IUsersRepository } from '@modules/restaurant/repositories/IUsersRepository';
import { Maybe } from '@shared/types/Maybe';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, name, password }: ICreateUserDTO): Promise<IUser> {
    const user = this.repository.create({
      email,
      name,
      password: hashSync(password, 8),
    });
    await this.repository.save(user);
    return user;
  }

  findByEmail(email: string): Promise<Maybe<IUser>> {
    return this.repository.findOne({ email });
  }
}

export { UsersRepository };
