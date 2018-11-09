import merge from 'lodash.merge';

export default {
  createOne(model, body) {
    return model.create(body);
  },

  deleteOne(model, id) {
    return model.findByIdAndDelete(id);
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

  async updateOne(model, id, update) {
    const docToUpdate = await model.findById(id);
    merge(docToUpdate, update);
    return docToUpdate.save();
  },
};
