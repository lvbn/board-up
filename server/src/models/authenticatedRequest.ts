import { Request } from 'express';
import { AuthToken } from './authToken';

export interface AuthenticatedRequest extends Request {
  token?: AuthToken;
}
