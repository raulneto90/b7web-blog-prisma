import { inject, injectable } from 'tsyringe';

import { IDeletePostDTO } from '@modules/posts/dtos/IDeletePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

import { DeletePostError } from './DeletePostError';

@injectable()
export class DeletePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  async execute({ id }: IDeletePostDTO): Promise<void> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new DeletePostError.PostNotFoundError();
    }

    await this.postsRepository.delete(id);
  }
}
