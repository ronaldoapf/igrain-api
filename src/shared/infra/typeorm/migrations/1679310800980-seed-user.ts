import { hashSync } from 'bcrypt';
import { getRepository, MigrationInterface } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '../entities/User';

export class seedUser1679310800980 implements MigrationInterface {
  public async up(): Promise<void> {
    const userRepository = getRepository(User);
    await userRepository.save({
      id: uuid(),
      name: 'Fred',
      email: 'fred@graodireto.com.br',
      password: hashSync('123Fred', 8),
    });
  }

  public async down(): Promise<void> {}
}
