import { Router } from 'express';
import { signin } from '../controllers/authController';

const router = Router();

router.post('/', signin);

export { router as authRouter };
