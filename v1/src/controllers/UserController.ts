import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

export const all = async (request: Request, response: Response) => {
  const users = await UserService.findAll();

  return response.json(users);
};

export const create = async (request: Request, response: Response) => {
  const { name, email, age } = request.body;

  if (name && email) {
    const user = await UserService.create({ name, email, age });

    return response.json(user);
  }

  return response.json({ error: 'Missing parameters' });
};
