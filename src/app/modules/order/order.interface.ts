// IBooking.ts
export interface TOrder {
  carName: string; // Assuming carName could be null if booking is not found
  date: Date; // Assuming date is a Date object
  startTime: string; // Assuming startTime is a string (could also be a Date)
  endTime: string; // Assuming endTime is a string (could also be a Date)
  totalCost: number; // Total cost should be a number
  transactionId: string; // Assuming transactionId is a string
  name: string;
  email: string;
  phone: string;
}

export type paymentData = {
  transactionId: string;
  totalCost: number;
  name: string;
  email: string;
  phone: string;
};
