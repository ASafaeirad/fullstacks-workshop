import abstractCollectoin from './abstract-collection';

export default {
  createOne: model => async (req, res, next) => {
    try {
      const workshops = await abstractCollectoin.createOne(req.fullstacks.models[model], req.body);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  deleteOne: model => async (req, res, next) => {
    next(Error('Not Implemented yet'));
  },

  getOne: model => async (req, res, next) => {
    try {
      const workshops = await abstractCollectoin.getOne(req.fullstacks.models[model], req.body.id);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  getAll: model => async (req, res, next) => {
    try {
      const workshops = await abstractCollectoin.getAll(req.fullstacks.models[model]);
      res.json(workshops);
    } catch (err) {
      next(err);
    }
  },

  updateOne: model => async (req, res, next) => {
    next(Error('Not Implemented yet'));
  },
};
