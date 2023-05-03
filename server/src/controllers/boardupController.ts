import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { IBoardup, create, fetch, fetchAll } from '../models/boardups';
import { addToHosting } from '../models/user';
import { ObjectId } from 'mongoose';
import simpleLogger from '../utils/logger';

export const fetchBoards = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  const { ids, exclude } = req.body;

  const { boards, error } = await fetch(ids, exclude);

  if (error) {
    simpleLogger('boardupController', 'fetch', `Error: ${error.message}`);
    res.status(500).send('ServerError');
    return;
  }

  if (!boards) {
    simpleLogger('boardupController', 'fetch', `Error: NoBoards`);
    res.status(404).send('NoBoards');
    return;
  }

  res.status(200).json(boards);
};

export const createBoard = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    simpleLogger('boardupController', 'create', `Error: MissingAuthToken`);
    res.status(401).send('MissingAuthToken');
    return;
  }

  const data = req.body as IBoardup;

  const { board, error } = await create({ ...data, host: authToken.id });

  if (error) {
    simpleLogger('boardupController', 'create', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  if (!board) {
    simpleLogger('boardupController', 'create', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  // Update user model
  addToHosting(authToken.id, board._id as ObjectId);

  res.sendStatus(200);
};
