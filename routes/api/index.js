const router = require("express").Router();
const exampleRoute = require("./exampleRoute");

router.use("/example", exampleRoute);

module.exports = router;