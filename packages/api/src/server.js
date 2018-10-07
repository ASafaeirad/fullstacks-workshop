import env from '@frontendmonster/dev-utils/env';
import http from 'http';
import { MongooseClient, RedisClient } from './dal';
import { logger } from './logger';
import { createApp } from './app';

const logServerStat = () => {
  logger.success('Server ready at 4000');
  logger.warning('Environment: ', env.get());
};

export const startServer = async () => {
  try {
    await MongooseClient.createClient(process.env.MONGO_URI, { debug: env.isDev });
    await RedisClient.createClient(process.env.REDIS_URI, { debug: env.isDev });
  } catch (e) {
    logger.error(e.message);
    logger.error(e.stack);
    return;
  }

  const app = createApp({ secret: process.env.JWT_SECRET, verbose: env.isDev });
  const server = http.createServer(app);
  const port = process.env.port || 4000;

  server.listen(port, logServerStat);

  return server;
};
