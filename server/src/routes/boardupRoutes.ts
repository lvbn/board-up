import { Router } from 'express';
import { createBoard, fetchBoards } from '../controllers/boardupController';

const router = Router();

router.get('/', fetchBoards);

router.post('/', createBoard);

export { router as boardRouter };
