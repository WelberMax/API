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
  getOne: async (req, res) => {
    try {
      const project = await ProjectModel.findById(req.params.id);
      res.status(200).json(project);
    }catch(error){
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
  delete: async (req, res) => {
    try {
      const response = await ProjectModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ response, message: "Projeto apagado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  update: async (req, res) => {
    try {
      const project = {
        name: req.body.name,
        budget: req.body.budget,
        category: req.body.category,
        services: req.body.services,
        cost: req.body.cost

      };
      const response = await ProjectModel.findByIdAndUpdate(
        req.params.id,
        project,
        { new: true }
      );
      res
        .status(200)
        .json({ response, message: "Projeto atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = projectController;
