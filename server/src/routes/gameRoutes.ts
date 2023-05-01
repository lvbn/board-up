import { Router } from 'express';
import { fetchGames } from '../controllers/gameController';

const router = Router();

router.get('/', fetchGames);

export { router as gameRouter };
