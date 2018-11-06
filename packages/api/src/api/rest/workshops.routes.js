import { Router } from 'express';
import ctrl from './utils/abstract-controller';
import models from './utils/abstract-collection';

const workshopsRouter = new Router();
const model = 'Workshop';

workshopsRouter.route('/')
  .get(async (req, res) => {
    const response = await models.getAll(req.fullstacks.models[model])
      .populate('lecturers')
      .populate('stacks')
      .populate('prerequisites');

    res.json(response);
  })
  .post(ctrl.createOne(model));

export default workshopsRouter;
