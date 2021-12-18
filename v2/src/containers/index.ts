import { container } from 'tsyringe';

import { PostsRepository } from '@modules/posts/prisma/repositories/PostsRepository';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { UsersRepository } from '@modules/users/prisma/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);
