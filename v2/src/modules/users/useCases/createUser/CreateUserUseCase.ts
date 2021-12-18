import { hashSync } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { User } from '@prisma/client';

import { CreateUserError } from './CreateUserError';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email,
    name,
    password,
    active,
  }: ICreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new CreateUserError.UserAlreadyExistsError();
    }

    const passwordHashed = hashSync(password, 8);

    const user = await this.usersRepository.create({
      email,
      name,
      password: passwordHashed,
      active,
    });

    delete user.password;

    return user;
  }
}
