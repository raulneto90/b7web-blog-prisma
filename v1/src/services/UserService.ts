import { PrismaClient } from '.prisma/client';

type findOneDataProp = {
  id?: string;
  email?: string;
};

const prisma = new PrismaClient();

export const UserService = {
  findOne: async (data: findOneDataProp) => {
    return prisma.user.findUnique({ where: data });
  },
};
