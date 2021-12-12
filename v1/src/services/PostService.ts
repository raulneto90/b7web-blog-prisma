import { PrismaClient } from '.prisma/client';

type createDataProp = {
  title: string;
  body: string;
  authorId: string;
};
type updateDataProp = {
  title?: string;
  body?: string;
  authorId?: string;
  published?: boolean;
};

const prisma = new PrismaClient();

export const PostService = {
  findAll: async () => {
    return prisma.post.findMany({ where: { published: true } });
  },
  findOne: async (id: string) => {
    return prisma.post.findUnique({ where: { id } });
  },
  create: async (data: createDataProp) => {
    return prisma.post.create({ data });
  },
  update: async (id: string, data: updateDataProp) => {
    return prisma.post.update({ where: { id }, data });
  },
  delete: async (id: string) => {
    return prisma.post.delete({ where: { id } });
  },
};
