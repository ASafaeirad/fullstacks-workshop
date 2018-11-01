export const getAll = async (req, res) => {
  const lecturer = await req.fullstacks.models.Lecturer.find();
  res.json(lecturer);
};

export const create = async (req, res, next) => {
  try {
    const lecturer = await req.fullstacks.models.Lecturer.create(req.body);
    res.json(lecturer);
  } catch (e) {
    next(e);
  }
};
