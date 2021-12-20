import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { DeletePostController } from '@modules/posts/useCases/deletePost/DeletePostController';
import { ListPostsController } from '@modules/posts/useCases/listPosts/ListPostsController';
import { UpdatePostController } from '@modules/posts/useCases/updatePost/UpdatePostController';

const postsRoutes = Router();
const createPostController = new CreatePostController();
const listPostsController = new ListPostsController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();

postsRoutes.post('/create', createPostController.handle);
postsRoutes.post('/list', listPostsController.handle);
postsRoutes.post('/update/:id', updatePostController.handle);
postsRoutes.post('/delete/:id', deletePostController.handle);

export { postsRoutes };
