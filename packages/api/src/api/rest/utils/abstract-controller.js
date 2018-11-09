import abstractCollectoin from './abstract-collection';

export default {
  createOne: model => async (req, res, next) => {
    try {
      const Model = req.fullstacks.models[model];
      if (!Model) {
        throw Error('model not found');
      }
      const workshops = await abstractCollectoin.createOne(Model, req.body);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  deleteOne: model => async (req, res, next) => {
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

      const workshops = await abstractCollectoin.deleteOne(Model, id);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  getOne: model => async (req, res, next) => {
    try {
      const Model = req.fullstacks.models[model];
      if (!Model) {
        throw Error('model not found');
      }
      const { id } = req.body;

      if (!id) {
        res.status(400).json('No id provided');
        return;
      }

      const workshops = await abstractCollectoin.getOne(Model, id);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  getAll: model => async (req, res, next) => {
    const Model = req.fullstacks.models[model];
    if (!Model) {
      throw Error('model not found');
    }
    try {
      const workshops = await abstractCollectoin.getAll(Model);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  updateOne: model => async (req, res, next) => {
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

      const workshops = await abstractCollectoin.updateOne(Model, id, req.body);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },
};
