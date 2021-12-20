import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

export class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content, authorId } = request.body;

    const createPostUseCase = container.resolve(CreatePostUseCase);

    const post = await createPostUseCase.execute({ title, content, authorId });

    return response.status(200).json(post);
  }
}
