import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // Import cookie-parser
import { UserRoutes } from './app/modules/user.route';
import path from 'path';
import globalErrorHandler from './app/Middlewar/globalErrorHandler';

const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true, // Allow credentials (cookies, auth headers)
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser()); // Add cookie-parser middleware
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
app.use('/api', UserRoutes);



app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our portfolio server');
});

//Global error handler
app.use(globalErrorHandler);
// Global "Not Found" handler for unmatched routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
});

export default app;
