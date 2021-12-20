import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

import { UpdatePostError } from './UpdatePostError';

interface IRequest {
  id: string;
  title?: string;
  content?: string;
  authorId?: string;
}

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ id, authorId, content, title }: IRequest): Promise<void> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new UpdatePostError.PostNotFoundError();
    }

    await this.postsRepository.update(id, { authorId, content, title });
  }
}
