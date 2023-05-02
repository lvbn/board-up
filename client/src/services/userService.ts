import { User } from '../models/user';

const baseUrl = 'http://localhost:3001/user';

export const fetchUser = async (): Promise<{ user?: User; error?: string }> => {
  const response = await fetch(baseUrl, {
    credentials: 'include',
    method: 'GET',
  });

  if (!response.ok) {
    return { error: 'Error Fetching User' };
  }

  const user = (await response.json()) as unknown as User;
  return { user };
};
