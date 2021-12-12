import { PrismaClient } from '.prisma/client';

type findOneDataProp = {
  id?: string;
  email?: string;
};

type createUserProp = {
  name: string;
  email: string;
  age?: number;
};

const prisma = new PrismaClient();

export const UserService = {
  findOne: async (data: findOneDataProp) => {
    return prisma.user.findUnique({ where: data });
  },
  findAll: async () => {
    return prisma.user.findMany({});
  },
  create: async (data: createUserProp) => {
    return prisma.user.create({ data });
  },
};
