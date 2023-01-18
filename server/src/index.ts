import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from './config';
import Logging from './library/Logging';
import { listen, logRequest, setCors, err, useCookies } from './middleware';
import userRoutes from './routes/User'

dotenv.config();

const app: Express = express();

/** Connect to MongoDB */
mongoose
  .connect(config.mongo.url)
  .then(() => {
    Logging.info('🫙  [database]: Successfully connected');
    startServer();
  })
  .catch((err) => Logging.error(`🫙  [database]: ${err}`));

/** Connect to Server */
const startServer = () => {
  /** Middlewares */
  logRequest();
  setCors();
  useCookies();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Routes */
  app.use('/users', userRoutes);

  // Test route
  app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
    res.end();
  });

  err();
  listen();
};

export default app;
