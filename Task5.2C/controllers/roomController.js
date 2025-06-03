const roomService = require('../services/roomService');

exports.getAllRooms = (req, res) => {
  const rooms = roomService.getAllRooms();

  res.json({
    status: 200,
    data: rooms,
    message: 'Room list retrieved using service'
  });
};
