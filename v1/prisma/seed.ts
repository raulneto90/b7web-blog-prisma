import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test@test.com.br',
      name: 'Test',
      age: 20,
    },
  });

  await prisma.post.create({
    data: {
      body: 'This is a test post',
      title: 'Test Post',
      authorId: user.id,
    },
  });
};

main();
