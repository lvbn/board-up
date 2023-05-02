import { createContext } from 'react';
import { User } from './models/user';

export const UserContext = createContext<{
  user: User | undefined;
  update: ((user: User) => void) | undefined;
}>({ user: undefined, update: undefined });
