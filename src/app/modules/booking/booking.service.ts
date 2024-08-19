import mongoose, { FilterQuery } from 'mongoose';
import { TBooking } from './booking.interface';
import BookingModel from './booking.model';
// import { TCar } from '../car/car.interface';
import CarModel from '../car/car.model';
// import calculateTotalCost from '../../utils/calculateTotalCost';

const createBooking = async (
  carId: string,
  userId: string,
  date: string,
  startTime: string,
) => {
  try {
    // Create the booking
    const booking = await BookingModel.create({
      car: carId,
      user: userId,
      date,
      startTime,
      totalCost: 0, // Default value, will be updated later
    });

    // Fetch additional details
    const populatedBooking = await BookingModel.findById(booking._id)
      .populate('user') // Populate user details
      .populate('car') // Populate car details
      .exec();

    if (!populatedBooking) {
      throw new Error('Booking not found');
    }

    return populatedBooking;
  } catch (error) {
    // Throw the error to be handled by the controller
    throw new Error(`Error creating booking: ${error}`);
  }
};

const getAllBookings = async (carId?: string, date?: string) => {
  try {
    const filter: FilterQuery<TBooking> = {};

    if (carId) {
      filter.car = new mongoose.Types.ObjectId(carId); // Ensure carId is an ObjectId
    }

    if (date) {
      // Parse the date and create a range from the start to the end of the day
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); // Start of the day
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999); // End of the day

      // Filter bookings that fall within the day
      filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    const bookings = await BookingModel.find(filter)
      .populate('user') // Populate user details
      .populate('car'); // Populate car details

    return bookings;
  } catch (error) {
    throw new Error(`Error getting bookings: ${error}`);
  }
};
const getAllBookingsUser = async () => {
  try {
    // Create a filter object to hold the query conditions

    // Fetch the bookings based on the filter
    const bookings = await BookingModel.find()
      .populate('user') // Populate user details
      .populate('car'); // Populate car details

    return bookings;
  } catch (error) {
    throw new Error(`Error getting bookings: ${error}`);
  }
};
const returnCarService = async (
  bookingId: string,
  endTime: string,
): Promise<TBooking | null> => {
  // Find the booking by ID
  const booking = await BookingModel.findById(bookingId)
    .populate('user')
    .populate('car')
    .exec();
  if (!booking) {
    throw new Error('Booking not found');
  }

  // Helper function to convert time string (HH:mm) to total hours
  const timeToHours = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
  };

  // Convert startTime and endTime to hours
  const startHours = timeToHours(booking.startTime);

  let endHours = timeToHours(endTime);

  // Handle cases where end time is on the next day
  if (endHours < startHours) {
    endHours += 24; // Assume endTime is the next day
  }

  // Calculate duration in hours
  const durationHours = endHours - startHours;

  // Ensure durationHours is a valid number
  if (isNaN(durationHours) || durationHours < 0) {
    throw new Error('Invalid duration');
  }

  // Validate and calculate total cost
  const pricePerHour = booking.car?.pricePerHour ?? 0; // Default to 0 if not available
  if (pricePerHour <= 0) {
    throw new Error('Invalid price per hour');
  }
  const totalCost = durationHours * pricePerHour;

  // Ensure totalCost is a valid number
  if (isNaN(totalCost) || totalCost < 0) {
    throw new Error('Total cost calculation failed');
  }

  // Update booking with endTime and totalCost
  booking.endTime = endTime;
  booking.totalCost = totalCost;

  // Save updated booking
  await booking.save();

  // Update car status
  if (booking.car) {
    await CarModel.findByIdAndUpdate(booking.car._id, { status: 'available' });
  }

  return booking;
};

export const BookingServices = {
  createBooking,
  getAllBookings,
  getAllBookingsUser,
  returnCarService,
};
