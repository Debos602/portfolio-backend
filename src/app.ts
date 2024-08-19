import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user.route';
import { CarRoutes } from './app/modules/car.route';
import { BookingRoutes } from './app/modules/booking.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

// Register routes
app.use('/api', UserRoutes);
app.use('/api', CarRoutes);
app.use('/api', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Car Rental Reservation System');
});

// Global "Not Found" handler for unmatched routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
});

export default app;
