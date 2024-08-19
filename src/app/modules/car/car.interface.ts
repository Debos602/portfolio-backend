import { ObjectId } from 'mongoose';

export interface TCar {
  _id?: ObjectId;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status?: 'available' | 'unavailable'; // Defaults to 'available'
  features: string[];
  pricePerHour: number;
  isDeleted: boolean; // Defaults to false
  createdAt: Date;
  updatedAt: Date;
}

export interface TDecodedToken {
  userId: string;
  role: string;
}
