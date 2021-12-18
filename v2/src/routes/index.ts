import { Router } from 'express';

import { postsRoutes } from './posts.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/posts', postsRoutes);

export { routes };
