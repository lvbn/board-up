import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { create, findByUsername } from '../models/user';
import { signToken } from '../utils/authUtils';

export const signin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log('authController/signin error: BadData');
    res.sendStatus(400);
    return;
  }

  try {
    const { user, error } = await findByUsername(username);

    if (error) {
      console.log('authController/signin error:', error.message);
      res.sendStatus(500);
      return;
    }

    if (!user) {
      console.log('authController/signin error: NoUserFound');
      res.sendStatus(500);
      return;
    }

    const passMatch = await bcrypt.compare(password, user.password!);

    if (!passMatch) {
      console.log('authController/signin error: PasswordsNoMatch');
      res.sendStatus(401);
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

    res.status(200).json({
      _id: user._id,
      username: user.username,
      hostingBoardups: [],
      attendingBoardups: [],
    });
  } catch (error) {
    console.log('authController/signin error:', error);
    res.sendStatus(500);
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log('authController/signup error: BadData');
    res.sendStatus(400);
    return;
  }

  const { user, error } = await create(username.toLowerCase(), password);

  if (error) {
    console.log('authController/signup error:', error.message);
    res.status(500).send(error.message);
    return;
  }

  if (!user) {
    console.log('authController/signup error: UserNotCreated');
    res.sendStatus(500);
    return;
  }

  // Create JWT token
  const token = signToken(user._id as string, user.username);

  if (!token) {
    console.log('authController/signup error: TokenNotCreated');
    res.sendStatus(500);
    return;
  }

  res.cookie('authToken', token, {
    httpOnly: true,
  });

  // Send
  res.status(200).json(user);
};
