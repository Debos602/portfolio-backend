import express from 'express';
import { CarControllers } from './car/car.controller';
import auth from '../Middlewar/auth';

const router = express.Router();

router.post('/cars', auth('admin'), CarControllers.createCarInfo);
router.get('/cars', CarControllers.getAllCar);
router.get('/cars/:id', CarControllers.getSingleCar);
router.put('/cars/:id', auth('admin'), CarControllers.updateCarInDb);
router.delete('/cars/:id', auth('admin'), CarControllers.deleteCarformDb);
export const CarRoutes = router;
