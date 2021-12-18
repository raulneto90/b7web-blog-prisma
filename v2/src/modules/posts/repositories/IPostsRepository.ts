import { Post } from '@prisma/client';

import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '../dtos/IUpdatePostDTO';

export interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  list(): Promise<Post[]>;
  update(id: string, data: IUpdatePostDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
