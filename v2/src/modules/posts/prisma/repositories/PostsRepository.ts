import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '@modules/posts/dtos/IUpdatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { Post, PrismaClient } from '@prisma/client';

export class PostsRepository implements IPostsRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  async create(data: ICreatePostDTO): Promise<Post> {
    const post = await this.repository.post.create({ data });

    return post;
  }

  async list(): Promise<Post[]> {
    return this.repository.post.findMany();
  }

  async update(id: string, data: IUpdatePostDTO): Promise<void> {
    await this.repository.post.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.repository.post.delete({ where: { id } });
  }
}
