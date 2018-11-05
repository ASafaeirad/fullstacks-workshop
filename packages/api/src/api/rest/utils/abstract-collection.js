import merge from 'lodash.merge';

export default {
  createOne(model, body) {
    return model.create(body);
  },

  deleteOne(docToDelete) {
    return docToDelete.remove();
  },

  getOne(model, id) {
    return model.findById(id);
  },

  getAll(model, skip = 0, limit = 100) {
    return model
      .find()
      .sort({ updatedAt: -1 })
      .skip(+skip)
      .limit(+limit);
  },

  updateOne(docToUpdate, update) {
    merge(docToUpdate, update);
    return docToUpdate.save();
  },
};
