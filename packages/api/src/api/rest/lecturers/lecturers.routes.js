import { Router } from 'express';
import * as ctrl from './lecturers.controller';

const lecturersRouter = new Router();

lecturersRouter.get('/', ctrl.getAll);
lecturersRouter.post('/', ctrl.create);

export default lecturersRouter;
