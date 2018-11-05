import { Router } from 'express';
import ctrl from './utils/abstract-controller';

const workshopsRouter = new Router();
const model = 'Workshop';

workshopsRouter.route('/')
  .get(ctrl.getAll(model))
  .post(ctrl.createOne(model));

export default workshopsRouter;
