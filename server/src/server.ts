import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 API server running on http://localhost:3333');
  });

app.get('/', () => {
  return { message: 'Hello world!' };
});

app.get('/users', async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
});
