import { NextFunction, Request, Response, json } from 'express';
import jwt from 'jsonwebtoken';

import { AuthToken } from '../models/authToken';
import { AuthenticatedRequest } from '../models/authenticatedRequest';
import simpleLogger from '../utils/logger';

interface Route {
  path: string;
  method: string;
}

const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  simpleLogger('authMiddleware', 'METHOD/ROUTE', `${req.method} ${req.path}`);
  const unrestrictedRoutes: Route[] = [
    { path: '/auth/signin', method: 'POST' },
    { path: '/auth/signup', method: 'POST' },
  ];
  const unrestrictedRoute = unrestrictedRoutes.findIndex(
    (route) => route.path === req.path && route.method === req.method
  );
  if (unrestrictedRoute !== -1) {
    next();
    return;
  }

  // [ START Verify User ]
  // Cookie
  const { authToken } = req.cookies;

  if (!authToken) {
    simpleLogger('authMiddleware', 'auth', 'Error: MissingAuthToken');
    res.status(400).send('MissingAuthToken');
    return;
  }

  // Verify the token
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    simpleLogger('authMiddleware', 'auth', 'Error: NoSecret');
    res.status(500).send('ServerError');
    return;
  }

  const token = jwt.verify(authToken, secret) as AuthToken;
  // [ END Verify User ]

  req.token = token;
  next();
};

export default authMiddleware;
