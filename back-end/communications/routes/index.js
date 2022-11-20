const express = require('express');
const router = express.Router();

router.use('/api/user', require('./user'))
router.use('/api/trails', require('./trails'))
module.exports = router