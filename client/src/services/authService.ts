import { User } from '../models/user';

const baseUrl = 'http://localhost:3001/auth';

export const signin = async (
  username: string,
  password: string
): Promise<{ user?: User; error?: string }> => {
  const response = await fetch(baseUrl + '/signin', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    return { error: 'Error Signin In' };
  }

  const user = (await response.json()) as unknown as User;
  return { user };
};

export const signup = async (
  username: string,
  password: string
): Promise<{ user?: User; error?: string }> => {
  const response = await fetch(baseUrl + '/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return { error };
  }

  const user = (await response.json()) as unknown as User;
  return { user };
};
