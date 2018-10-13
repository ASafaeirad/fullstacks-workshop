import { Router } from 'express';
import { workshopsRouter } from './workshops';

const restRouter = new Router();

restRouter.use('/workshops', workshopsRouter);

export default restRouter;
