import { Router } from 'express';
import { getUser } from '../controllers/userController';

const router = Router();

router.get('/', getUser);

export { router as userRouter };
