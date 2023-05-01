import { authRouter } from './authRoutes';
import { boardRouter } from './boardupRoutes';
import { gameRouter } from './gameRoutes';
import { userRouter } from './userRoutes';

export const router = {
  user: userRouter,
  auth: authRouter,
  board: boardRouter,
  game: gameRouter,
};
