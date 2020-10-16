const Car = require('../../models/car');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
  usercars
};

async function usercars(req, res) {
  console.log('text',req.params.id);
  const cars = await Car.find({ 'user': req.params.id})
  res.status(200).json(cars);
}

async function index(req, res) {
  const Cars = await Car.find({});
  res.status(200).json(Cars);
}

async function show(req, res) {
  const car = await Car.findById(req.params.id);
  res.status(200).json(car);
}

async function create(req, res) {
  const car = await Car.create(req.body);
  res.status(201).json(car);
}

async function deleteOne(req, res) {
  const deletedCar= await Car.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCar);
}

async function update(req, res) {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedCar);
}