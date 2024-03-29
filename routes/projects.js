const router = require("express").Router();

const projectController = require("../controllers/projectController");

//funcoes
router.route("/projects").get((req, res) => projectController.getAll(req, res));
router.route("/projects").post((req, res) => projectController.create(req, res));
router.route("/projects/:id").delete((req, res) => projectController.delete(req, res));
router.route("/projects/:id").get((req, res) => projectController.getOne(req, res));
router.route("/projects/:id").patch((req, res) => projectController.update(req, res));



module.exports = router;