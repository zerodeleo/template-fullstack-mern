import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config';
import Logging from './library/Logging';

dotenv.config();

const app: Express = express();

/** Connect to MongoDB **/
mongoose
  .connect(config.mongo.url)
  .then(() => Logging.info('[database]: Successfully connected'))
  .catch((err) => Logging.error(`[database]: ${err}`));

const port = process.env.PORT || 8080;

const allowedOrigins = [<string>process.env.CLIENT_URL];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  Logging.info(`[server]: Running on port ${port}`);
});
