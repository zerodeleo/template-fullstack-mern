import app from '..';
import Logging from '../lib/Logging';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const logRequest = () => {
  app.use((req, res, next) => {
    Logging.info(`❔ Req METHOD: [${req.method}] - URL: [${req.url}]`);

    res.on('finish', () => {
      Logging.info(`❕ Res METHOD: [${req.method}] - URL: [${req.url}]`);
    });

    next();
  });
};

export const setCors = () => {
  const CLIENT_URL = <string>process.env.CLIENT_URL;
  const allowedOrigins = CLIENT_URL ? [CLIENT_URL] : ['http://127.0.0.1:5173', 'http://localhost:5173'];
  const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

  app.use(cors(options));
};

export const listen = () => {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    Logging.info(`💻 [server]: Running on port ${port}`);
  });
};

export const useCookies = () => {
  app.use(cookieParser());
};

export const err = () => {
  app.use((_, res) => {
    const err = new Error('Not found');
    Logging.error(err);
    return res.status(404).json({ message: err.message });
  });
};
