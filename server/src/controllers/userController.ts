import { Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { findById } from '../models/user';
import { signToken } from '../utils/authUtils';
import simpleLogger from '../utils/logger';

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    simpleLogger('userController', 'getUser', `Error: MissingAuthToken`);
    res.status(401).send('MissingAuthToken');
    return;
  }

  const { user, error } = await findById(authToken.id);

  if (error) {
    simpleLogger('userController', 'getUser', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  if (!user) {
    simpleLogger('userController', 'getUser', `Error: DatabaseError`);
    res.status(500).send('DatabaseError');
    return;
  }

  // Create JWT token
  const token = signToken(user._id as string, user.username);

  if (!token) {
    simpleLogger('userController', 'getUser', `Error: TokenNotCreated`);
    res.status(500).send('TokenNotCreated');
    return;
  }

  // Should refresh token
  res.cookie('authToken', token, {
    httpOnly: true,
  });

  // Send
  res.status(200).json(user);
};
