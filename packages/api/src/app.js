import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import { morgan } from './logger';

export const createApp = ({ secret, verbose } = {}) => {
  const app = express();

  app.disable('x-powered-by');

  if (verbose) {
    app.use(morgan('api'));
  }

  app.use(helmet());
  app.use(compression());

  return app;
};
