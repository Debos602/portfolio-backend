import express from 'express';
import { OrderController } from './order/order.controller';
import auth from '../Middlewar/auth';

const router = express.Router();

router.post('/orders', auth('user'), OrderController.createOrderInDb);

export const OrderRoutes = router;
