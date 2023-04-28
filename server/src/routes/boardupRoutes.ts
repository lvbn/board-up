import { Router } from 'express';
import { createBoard } from '../controllers/boardupController';

const router = Router();

router.post('/', createBoard);

export { router as boardRouter };
