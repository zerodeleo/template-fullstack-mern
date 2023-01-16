import app from '../';
import Logging from '../library/Logging';
import cors from 'cors';

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
  const allowedOrigins = [<string>process.env.CLIENT_URL];
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
