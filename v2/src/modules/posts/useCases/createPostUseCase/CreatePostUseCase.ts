import { inject, injectable } from 'tsyringe';

import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { Post } from '@prisma/client';

import { CreatePostError } from './CreatePostError';

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ICreatePostDTO): Promise<Post> {
    const user = await this.usersRepository.findOne(data.authorId);

    if (!user) {
      throw new CreatePostError.UserNotFoundError();
    }

    return this.postsRepository.create(data);
  }
}
