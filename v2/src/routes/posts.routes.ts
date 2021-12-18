import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPostUseCase/CreatePostController';

const postsRoutes = Router();
const createPostController = new CreatePostController();

postsRoutes.post('/create', createPostController.handle);

export { postsRoutes };
