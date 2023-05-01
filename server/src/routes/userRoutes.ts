import { Router } from 'express';
import { getUser, createUser } from '../controllers/userController';

const router = Router();

router.get('/', getUser);

router.post('/', createUser);

export { router as userRouter };
