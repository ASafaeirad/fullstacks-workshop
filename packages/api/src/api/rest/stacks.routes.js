import { Router } from 'express';
import ctrl from './utils/abstract-controller';

const stacksRouter = new Router();
const model = 'Stack';

stacksRouter.route('/')
  .get(ctrl.getAll(model))
  .post(ctrl.createOne(model));

stacksRouter.route('/:slug')
  .get(ctrl.getOne(model))
  .put(ctrl.updateOne(model))
  .delete(ctrl.deleteOne(model));

export default stacksRouter;
