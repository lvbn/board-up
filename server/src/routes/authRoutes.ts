import { Router } from 'express';
import { signin } from '../controllers/authController';

const router = Router();
ƒ
router.get('/', signin);

export { router as authRouter };
