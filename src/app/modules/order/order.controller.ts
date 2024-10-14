import { Request, Response } from 'express';
import OrderModel from './order.model';

const createOrderInDb = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await OrderModel.create(data);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'An error occurred while creating the order',
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
};

export const OrderController = {
  createOrderInDb,
};
