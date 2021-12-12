import { Request, Response } from 'express';

import { PostService } from '../services/PostService';
import { UserService } from '../services/UserService';

export const all = async (request: Request, response: Response) => {
  const posts = await PostService.findAll();

  return response.json(posts);
};

export const one = async (request: Request, response: Response) => {
  const { id } = request.params;

  const post = await PostService.findOne(id);

  if (!post) {
    return response.json({ error: 'Post not found' });
  }

  return response.json(post);
};

export const create = async (request: Request, response: Response) => {
  const { title, body, author } = request.body;

  if (title && body && author) {
    const user = await UserService.findOne({ id: author });

    if (!user) {
      return response.json({ error: 'Author not found' });
    }

    const post = await PostService.create({ title, body, authorId: user.id });

    return response.json(post);
  }

  return response.json({ error: 'Missing parameters' });
};

export const togglePost = async (request: Request, response: Response) => {
  const { id } = request.params;

  const post = await PostService.findOne(id);

  if (!post) {
    return response.json({ error: 'Post not found' });
  }

  const updatedPost = await PostService.update(post.id, {
    published: !post.published,
  });

  return response.json(updatedPost);
};

export const deletePost = async (request: Request, response: Response) => {
  const { id } = request.params;

  const post = await PostService.findOne(id);

  if (!post) {
    return response.json({ error: 'Post not found' });
  }

  await PostService.delete(post.id);

  return response.json({ message: 'Post deleted' });
};
