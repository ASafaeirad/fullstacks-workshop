import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { morgan } from './logger';
import apiRouter from './api';

export const createApp = ({ models, verbose } = {}) => {
  const app = express();

  app.disable('x-powered-by');

  if (verbose) {
    app.use(morgan('api'));
  }

  app.use(helmet());
  app.use(compression());
  app.use(cors());

  app.use((req, _, next) => {
    req.fullstacks.models = models;
    next();
  });

  app.use('/api', apiRouter);

  return app;
};
