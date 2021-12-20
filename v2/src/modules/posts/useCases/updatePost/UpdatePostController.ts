import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePostUseCase } from './UpdatePostUseCase';

export class UpdatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content, authorId } = request.body;
    const { id } = request.params;

    const updatePostUseCase = container.resolve(UpdatePostUseCase);

    await updatePostUseCase.execute({ id, title, content, authorId });

    return response.json();
  }
}
