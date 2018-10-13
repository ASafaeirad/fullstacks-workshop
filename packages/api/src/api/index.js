import { Router } from 'express';
import restRouter from './rest';

const apiRouter = new Router();

apiRouter.use('/rest', restRouter);

export default apiRouter;
