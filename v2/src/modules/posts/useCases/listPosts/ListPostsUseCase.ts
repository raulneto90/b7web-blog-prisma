import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { Post } from '@prisma/client';

@injectable()
export class ListPostsUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute(): Promise<Post[]> {
    return this.postsRepository.list();
  }
}
