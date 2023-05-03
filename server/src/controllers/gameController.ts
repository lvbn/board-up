import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { fetch } from '../models/game';
import simpleLogger from '../utils/logger';

export const fetchGames = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    simpleLogger('gameController', 'fetch', `Error: MissingAuthToken`);
    res.status(401).send('MissingAuthToken');
    return;
  }

  const { games, error } = await fetch();

  if (error) {
    simpleLogger('gameController', 'fetch', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  if (!games) {
    simpleLogger('gameController', 'fetch', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  res.status(200).json(games);
};
