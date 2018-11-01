import { Router } from 'express';
import { workshopsRouter } from './workshops';
import { lecturersRouter } from './lecturers';

const restRouter = new Router();

restRouter.use('/workshops', workshopsRouter);
restRouter.use('/lecturers', lecturersRouter);

export default restRouter;
