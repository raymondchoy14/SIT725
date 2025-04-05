const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// POST /api/detect
router.post('/', Controllers.detectController.checkPhishing);

module.exports = router;
