const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/users/register").post((req, res) => userController.create(req, res));
router.route("/users/list").get((req, res) => userController.getUsers(req, res));
router.route("/users/:id").get((req, res) => userController.getUserId(req, res));
router.route("/users/login").post((req, res) => userController.login(req, res));
module.exports = router;