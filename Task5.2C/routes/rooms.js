const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// GET /api/rooms
router.get('/', Controllers.roomController.getAllRooms);

module.exports = router;

