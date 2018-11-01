import { Router } from 'express';
import * as ctrl from './workshops.controller';

const workshopsRouter = new Router();

workshopsRouter.get('/', ctrl.getAll);
workshopsRouter.post('/', ctrl.create);

export default workshopsRouter;
