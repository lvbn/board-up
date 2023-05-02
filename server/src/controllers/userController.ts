import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import { create, findById } from '../models/user';
import { signToken } from '../utils/authUtils';

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  const authToken = req.token;

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  const { user, error } = await findById(authToken.id);

  if (error) {
    console.log('userController/getUser error:', error.message);
    res.sendStatus(500);
    return;
  }

  if (!user) {
    console.log('userController/getUser error: UserNotFound');
    res.sendStatus(500);
    return;
  }

  // Create JWT token
  const token = signToken(user._id as string, user.username);

  if (!token) {
    console.log('userController/createUser error: TokenNotCreated');
    res.sendStatus(500);
    return;
  }

  // Should refresh token
  res.cookie('authToken', token, {
    httpOnly: true,
  });

  // Send
  res.status(200).json(user);
};
