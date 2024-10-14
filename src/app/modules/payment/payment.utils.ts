import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const initiatPayment = async () => {
  const response = await axios.post(process.env.Payment_url!, {
    store_id: process.env.store_id,
    signature_key: process.env.Signature_Key,
    tran_id: 'debos@206914',
    success_url: 'http://www.merchantdomain.com/suc esspage.html',
    fail_url: 'http://www.merchantdomain.com/faile dpage.html',
    cancel_url: 'http://www.merchantdomain.com/can cellpage.html',
    amount: '10.0',
    currency: 'BDT',
    desc: 'Merchant Registration Payment',
    cus_name: 'Name',
    cus_email: 'payer@merchantcusomter.com',
    cus_add1: 'House B-158 Road 22',
    cus_add2: 'Mohakhali DOHS',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1206',
    cus_country: 'Bangladesh',
    cus_phone: '+8801704',
    type: 'json',
  });
  console.log(response);
  return response.data;
};
