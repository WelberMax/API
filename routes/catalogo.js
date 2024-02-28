const router = require("express").Router();

const catalogoController = require("../controllers/catalogoController");

router.route("/catalogo").get((req, res) => catalogoController.getCatalago(req, res));

module.exports = router;