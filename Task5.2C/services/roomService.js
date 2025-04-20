const hotelRooms = [
  { id: 1, type: 'Single Room', price: 100, available: true },
  { id: 2, type: 'Double Room', price: 150, available: false },
  { id: 3, type: 'Suite', price: 250, available: true }
];

const getAllRooms = () => {
  return hotelRooms;
};

module.exports = { getAllRooms };
  