import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { IBoardup, create, fetch, fetchAll } from '../models/boardups';
import { addToAttending } from '../models/user';

// Fetch all boards (not user's)
/**
 *
 */
export const fetchBoards = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  const { ids, exclude } = req.body;

  const { boards, error } = await fetch(ids, exclude);

  if (error) {
    console.log('boardupController/fetchBoards error:', error.message);
    res.sendStatus(500);
    return;
  }

  if (!boards) {
    console.log('boardupController/fetchBoards error: NoBoard');
    res.sendStatus(500);
    return;
  }

  res.status(200).json(boards);
};

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

  // Update user model
  addToAttending(authToken.id, board._id?.toString() || '');

  res.status(200).send(board);
};
