import { NextFunction, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

export function paginate(model: any) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const page = Number(request.query._page) || 1;
    const limit = Number(process.env.LIMIT_DATA) || 10;
    const host = `${process.env.HOST}${request.originalUrl}`;

    const prisma = new PrismaClient();

    const totalItems = await prisma[model].count();

    const links = {
      first: `${host}?_page=1`,
      last: `${host}?_page=${Math.ceil(totalItems / limit)}`,
    };
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < totalItems) {
      Object.assign(links, {
        next: `${host}&_page=${page + 1}`,
      });
    }

    if (startIndex > 0) {
      Object.assign(links, {
        previous: `${host}&_page=${page - 1}`,
      });
    }

    const data = await prisma[model].findMany({
      skip: startIndex,
      take: limit,
    });

    const resultPaginated = {
      data,
      meta: {
        itemCount: data.length,
        totalItems,
        itemsPerPage: limit,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
      links,
    };

    response.dataPaginated = resultPaginated;

    next();
  };
}
