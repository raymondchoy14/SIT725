const roomService = require('../services/roomService');

exports.getAllRooms = (req, res) => {
  const rooms = roomService.getAllRooms();
  res.json({ data: rooms });
};
