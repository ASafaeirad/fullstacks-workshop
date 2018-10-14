export const getAll = async (req, res) => {
  const workshops = await req.fullstacks.models.Workshop.find();
  res.json(workshops);
};
