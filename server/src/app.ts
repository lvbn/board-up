import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router } from './routes';
import authMiddleware from './middlewares/authMiddleware';

export const configApp = (): Express => {
  const app: Express = express();

  app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

  app.use(cookieParser());

  app.use(express.json());

  app.use(authMiddleware);

  // Routes
  app.use('/user', router.user);

  app.use('/auth', router.auth);

  app.use('/board', router.board);

  app.use('/game', router.game);

  return app;
};
