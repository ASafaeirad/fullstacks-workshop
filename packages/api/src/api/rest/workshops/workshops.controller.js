export const getAll = async (req, res) => {
  const workshops = await req.fullstacks.models.Workshop.find();
  res.json(workshops);
};

export const create = async (req, res, next) => {
  try {
    const workshops = await req.fullstacks.models.Workshop.create(req.body);
    res.json(workshops);
  } catch (e) {
    next(e);
  }
};
