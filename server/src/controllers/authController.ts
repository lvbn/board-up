import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { create, findByUsername } from '../models/user';
import { signToken } from '../utils/authUtils';

import simpleLogger from '../utils/logger';

export const signin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    simpleLogger('authController', 'signin', 'Error: BadData');
    res.status(400).send('BadData');
    return;
  }

  try {
    const { user, error } = await findByUsername(username);

    if (error) {
      simpleLogger('authController', 'signin', 'Error: DatabaseError');
      res.sendStatus(500);
      return;
    }

    if (!user) {
      simpleLogger('authController', 'signin', 'Error: NoUserFound');
      res.status(400).send('NoUser');
      return;
    }

    const passMatch = await bcrypt.compare(password, user.password!);

    if (!passMatch) {
      simpleLogger('authController', 'signin', 'Error: IncorrectPassword');
      res.status(401).send('IncorrectPassword');
      return;
    }

    // Create JWT token
    const token = signToken(user._id as string, user.username);

    if (!token) {
      simpleLogger('authController', 'signin', 'Error: TokenNotCreated');
      res.status(500).send('ServerError');
      return;
    }

    // Should refresh token
    res.cookie('authToken', token, {
      httpOnly: true,
    });

    res.status(200).json({
      _id: user._id,
      username: user.username,
      hostingBoardups: user.hostingBoardups,
      attendingBoardups: user.attendingBoardups,
    });
  } catch (error) {
    console.log('authController/signin error:', error);
    res.sendStatus(500);
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    simpleLogger('authController', 'signup', 'Error: BadData');
    res.status(400).send('BadData');
    return;
  }

  const { user, error } = await create(username.toLowerCase(), password);

  if (error) {
    simpleLogger('authController', 'signup', 'Error: DatabaseError');
    res.status(500).send('ServerError');
    return;
  }

  if (!user) {
    simpleLogger('authController', 'signup', 'Error: NoUserFound');
    res.status(500).send('ServerError');
    return;
  }

  // Create JWT token
  const token = signToken(user._id as string, user.username);

  if (!token) {
    simpleLogger('authController', 'signup', 'Error: TokenNotCreated');
    res.status(500).send('ServerError');
    return;
  }

  res.cookie('authToken', token, {
    httpOnly: true,
  });

  // Send
  res.status(200).json(user);
};
