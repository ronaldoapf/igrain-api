import { Maybe } from '@shared/types/Maybe';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<Maybe<IUser>>;
}
