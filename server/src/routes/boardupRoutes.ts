import { Router } from 'express';
import { createBoard, fetchBoards } from '../controllers/boardupController';

const router = Router();

router.post('/', fetchBoards);

router.post('/create', createBoard);

export { router as boardRouter };
