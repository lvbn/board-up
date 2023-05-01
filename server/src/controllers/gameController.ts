import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { fetch } from '../models/game';

export const fetchGames = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  const { games, error } = await fetch();

  if (error) {
    console.log('gameController/fetchGames error:', error.message);
    res.sendStatus(500);
    return;
  }

  if (!games) {
    console.log('gameController/fetchGames error: NoGames');
    res.sendStatus(500);
    return;
  }

  res.status(200).json(games);
};
