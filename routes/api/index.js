const router = require("express").Router();
const quoteRoutes = require("./quotes");
const userRoutes = require('./users')

router.use('/quotes', quoteRoutes);
router.use('/users', userRoutes)

module.exports = router;