import { promises as fs } from 'fs';
import express from 'express';
import winston from 'winston';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import accountsRouter from './routes/account.routes.js';
import swaggerDocument from './doc.js';

global.fileName = 'accounts.json';

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'my-logs.log' }),
  ],
  format: winston.format.combine(
    winston.format.label({ label: 'my-bank-api' }),
    winston.format.timestamp(),
    winston.format.printf(({
      level, message, label, timestamp,
    }) => `${timestamp} [${label}] ${level}: ${message}`),
  ),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/account', accountsRouter);

app.listen(3000, async () => {
  try {
    await fs.readFile(global.fileName);
    global.logger.info('API Started!');
  } catch (error) {
    const initialJson = {
      lastId: 0,
      accounts: [],
    };
    fs.writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
      global.logger.info('API Started and File Created!');
    }).catch((err) => {
      global.logger.error(err);
    });
  }
});
