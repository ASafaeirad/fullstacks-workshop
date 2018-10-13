import { Router } from 'express';
import * as ctrl from './workshops.controller';

const workshopsRouter = new Router();

workshopsRouter.get('/', ctrl.getAll);

export default workshopsRouter;
