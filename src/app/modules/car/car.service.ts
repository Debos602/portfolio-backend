import { TCar } from './car.interface';
import CarModel from './car.model';

const createCar = async (car: TCar) => {
  const result = await CarModel.create(car);
  return result;
};

const getAllCar = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCar = async (id: string) => {
  const result = await CarModel.findById(id);
  return result;
};

const updateCar = async (id: string, car: TCar) => {
  const result = await CarModel.findByIdAndUpdate(id, car, { new: true });
  console.log(result);
  return result;
};

const deleteCar = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};

export const CarServices = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
