import 'dotenv/config';
import 'reflect-metadata';
import './containers';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { routes } from 'routes';

import { ErrorHandler } from '@errors/ErrorHandler';

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof ErrorHandler) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    console.log(error);

    return response.status(500).json({ message: 'Internal server error' });
  },
);

export { app };
