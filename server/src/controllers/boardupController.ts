import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { IBoardup, create } from '../models/boardups';

export const createBoard = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  const data = req.body as IBoardup;

  const { board, error } = await create(data);

  if (error) {
    console.log('boardupController/createBoard error:', error.message);
    res.sendStatus(500);
    return;
  }

  if (!board) {
    console.log('boardupController/createBoard error: NoBoard');
    res.sendStatus(500);
    return;
  }

  res.status(200).send(board);
};
