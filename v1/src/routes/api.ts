import { Router } from 'express';

import * as PostController from '../controllers/PostController';
import * as UserController from '../controllers/UserController';

const router = Router();

router.get('/posts', PostController.all);
router.get('/posts/:id', PostController.one);
router.post('/posts', PostController.create);
router.put('/posts/:id', PostController.togglePost);
router.delete('/posts/:id', PostController.deletePost);

router.get('/users', UserController.all);
router.post('/users', UserController.create);
// router.get('/users/:id', UserController.one);
// router.put('/users/:id', UserController.update);
// router.delete('/users/:id', UserController.delete);

export { router };
