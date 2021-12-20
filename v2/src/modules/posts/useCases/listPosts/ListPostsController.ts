import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPostsUseCase } from './ListPostsUseCase';

export class ListPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPostsUseCase = container.resolve(ListPostsUseCase);

    const posts = await listPostsUseCase.execute();

    return response.json(posts);
  }
}
