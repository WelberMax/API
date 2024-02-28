
const { Project: ProjectModel } = require("../models/projectModel");

const projectController = {
  getAll: async (req, res) => {
    try {
      const projects = await ProjectModel.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  create: async (req, res) => {
    try {
      const project = {
        id: req.body.id,
        name: req.body.name,
        budget: req.body.budget,
        category: req.body.category,
      };

      const response = await ProjectModel.create(project);
      //atencao retornando response
      res
        .status(200)
        .json({ response, message: "Project created successfully!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = projectController;
