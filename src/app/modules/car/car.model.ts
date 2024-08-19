import mongoose, { Schema } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  features: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CarModel = mongoose.model<TCar>('Car', carSchema);

export default CarModel;
