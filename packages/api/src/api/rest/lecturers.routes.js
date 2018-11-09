import { Router } from 'express';
import ctrl from './utils/abstract-controller';

const lecturersRouter = new Router();
const model = 'Lecturer';

lecturersRouter.route('/')
  .get(ctrl.getAll(model))
  .post(ctrl.createOne(model));

lecturersRouter.route('/:id')
  .delete(ctrl.deleteOne(model))
  .put(ctrl.updateOne(model));

export default lecturersRouter;
