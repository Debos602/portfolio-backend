import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user.route';
import { CarRoutes } from './app/modules/car.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', UserRoutes);
app.use('/api', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welceom to car management system');
});

export default app;
