const router = require("express").Router();

const categoryController = require("../controllers/categoryController");

//funcoes
router.route("/category").post((req, res) => categoryController.create(req, res));
router.route("/category").get((req, res) => categoryController.getAll(req, res));

module.exports = router;