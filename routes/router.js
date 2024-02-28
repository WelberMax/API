const router = require("express").Router();

//Categories router
const categoryRouter = require("./category");
const projectRouter = require("./projects");
const userRouter = require("./users");
const catalogoRouter = require("./catalogo");

router.use("/", categoryRouter);
router.use("/", projectRouter);
router.use("/", userRouter);
router.use("/", catalogoRouter);

module.exports = router;