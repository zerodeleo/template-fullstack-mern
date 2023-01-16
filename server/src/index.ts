import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from './config';
import Logging from './library/Logging';
import { listen, logRequest, setCors } from './middleware';

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
  logRequest();
  setCors();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

  listen();
};

export default app;
