import { Request, Response } from 'express';
import { CarServices } from './car.service';
import { TCar } from './car.interface';

const createCarInfo = async (req: Request, res: Response) => {
  try {
    // Check for the Authorization header

    const carInfo: TCar = req.body;
    const result = await CarServices.createCar(carInfo);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the car',
      error: err,
    });
  }
};

const getAllCar = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCar();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving all car',
      error: err,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await CarServices.getSingleCar(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the car',
      error: err,
    });
  }
};
const updateCarInDb = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const carInfo: TCar = req.body;
    const result = await CarServices.updateCar(id, carInfo);
    console.log(id, carInfo);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the car',
      error: err,
    });
  }
};
const deleteCarformDb = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await CarServices.deleteCar(id);
    res.status(200).json({
      success: true, // Correctly assigning `success` to be of type `boolean`
      statusCode: 200,
      message: 'Car deleted successfully',
      data: result, // Correctly assigning `data` to be of type `TUser`
    });
  } catch (err) {
    res.status(500).json({
      // Correctly assigning `statusCode` to be of type `number`
      success: false,
      message: 'An error occurred while deleting the car',
      error: err,
    });
  }
};
export const CarControllers = {
  createCarInfo,
  getAllCar,
  getSingleCar,
  updateCarInDb,
  deleteCarformDb,
};
