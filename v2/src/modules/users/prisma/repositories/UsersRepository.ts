import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/users/dtos/IUpdateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { PrismaClient, User } from '@prisma/client';

export class UsersRepository implements IUsersRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = await this.repository.user.create({ data });

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.repository.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return this.repository.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.user.findUnique({ where: { email } });
  }

  async update(id: string, data: IUpdateUserDTO): Promise<void> {
    await this.repository.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.user.delete({ where: { id } });
  }
}
