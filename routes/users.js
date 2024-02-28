const router = require("express").Router();

const userController = require("../../API/controllers/userController");

router.route("/users").post((req, res) => userController.create(req, res));
router.route("/users").get((req, res) => userController.getUsers(req, res));
module.exports = router;