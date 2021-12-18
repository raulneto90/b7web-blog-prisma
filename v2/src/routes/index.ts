import { Router } from 'express';

import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/user', usersRoutes);

export { routes };
