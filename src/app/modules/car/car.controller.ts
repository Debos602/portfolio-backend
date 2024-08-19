import { Request, Response } from 'express';
import { CarServices } from './car.service';
import { TCar } from './car.interface';

const createCarInfo = async (req: Request, res: Response) => {
  try {
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
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'No data found',
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving all cars',
      error: err,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await CarServices.getSingleCar(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'No data found',
        data: {},
      });
    }
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
      success: true,
      statusCode: 200,
      message: 'Car deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
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
