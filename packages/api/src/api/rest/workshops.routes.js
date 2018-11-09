import { Router } from 'express';
import merge from 'lodash.merge';
import ctrl from './utils/abstract-controller';
import models from './utils/abstract-collection';

const workshopsRouter = new Router();
const model = 'Workshop';

workshopsRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const response = await models.getAll(req.fullstacks.models[model])
        .populate('lecturers')
        .populate('stacks')
        .populate('prerequisites');

      res.json(response);
    } catch (err) {
      next(err);
    }
  })
  .post(ctrl.createOne(model));

workshopsRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const response = await models.getOne(req.fullstacks.models[model], req.params.id)
        .populate('lecturers')
        .populate('stacks')
        .populate('prerequisites');

      res.json(response);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const Model = req.fullstacks.models[model];
      if (!Model) {
        throw Error('model not found');
      }

      const { id } = req.params;
      if (!id) {
        res.status(400).json('No id provided');
        return;
      }

      const docToUpdate = await Model.findById(id);

      merge(docToUpdate, req.body);
      docToUpdate.stacks = [];
      docToUpdate.lecturers = [];
      docToUpdate.stacks.push(...req.body.stacks);
      docToUpdate.lecturers.push(...req.body.lecturers);

      const updated = await docToUpdate.save();
      res.json(updated);
    } catch (err) {
      next(err);
    }
  })
  .delete(ctrl.deleteOne(model));

workshopsRouter.route('/:id/thumbnail')
  .put(async (req, res, next) => {
    try {
      const Model = req.fullstacks.models[model];
      const { id } = req.params;

      const thumbnail = {
        data: req.files.thumbnail.data,
        mimetype: req.files.thumbnail.mimetype,
      };

      await Model.findByIdAndUpdate(id, { thumbnail });

      res.json({ OK: true });
    } catch (err) {
      next(err);
    }
  });

export default workshopsRouter;
