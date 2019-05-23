/**
 * Created by agros on 22.05.2019.
 */
const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;