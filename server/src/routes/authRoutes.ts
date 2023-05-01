import { Router } from 'express';
import { signin } from '../controllers/authController';

const router = Router();

router.get('/', signin);

export { router as authRouter };
