const router = require("express").Router();
const quoteRoutes = require("./quotes");

router.use('/quotes', quoteRoutes);

module.exports = router;