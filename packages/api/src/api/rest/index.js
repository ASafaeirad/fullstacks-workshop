import { Router } from 'express';
import workshopsRouter from './workshops.routes';
import lecturersRouter from './lecturers.routes';
import stacksRouter from './stacks.routes';

const restRouter = new Router();

restRouter.use('/workshops', workshopsRouter);
restRouter.use('/lecturers', lecturersRouter);
restRouter.use('/stacks', stacksRouter);

export default restRouter;
