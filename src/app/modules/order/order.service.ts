import { initiatPayment } from '../payment/payment.utils';
import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (data: TOrder) => {
  try {
    const result = await OrderModel.create(data);
    const response = await initiatPayment();
    console.log(response);
    return result; // <-- Return payment result here
  } catch (error) {
    console.error('Error creating order or initiating payment:', error);
    throw new Error('Failed to create order');
  }
};

export const OrderServices = {
  createOrder,
};
