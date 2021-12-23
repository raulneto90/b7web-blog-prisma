import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import { UsersRepository } from '@modules/users/prisma/repositories/UsersRepository';

interface ITokenPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response | void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Unauthorized' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id } = verify(token, authConfig.secret) as ITokenPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findOne(id);

    if (!user) return response.status(401).json({ message: 'Unauthorized' });

    request.user = { id };

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Unauthorized' });
  }
}
