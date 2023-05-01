import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './database';

import { router } from './routes';
import authMiddleware from './middlewares/authMiddleware';

dotenv.config();

const app: Express = express();

app.use(cookieParser());

app.use(express.json());

app.use(authMiddleware);

// Routes
app.use('/user', router.user);

app.use('/auth', router.auth);

app.use('/board', router.board);

app.use('/game', router.game);

// Listen
(async () => {
  const { success, error } = await connectDB();

  if (!success) return;

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`⚡️ Server started on http://localhost:${PORT}`);
  });
})();
