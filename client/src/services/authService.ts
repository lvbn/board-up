import { User } from '../models/user';

const baseUrl = 'http://localhost:3001/auth';

export const signin = async (
  username: string,
  password: string
): Promise<{ user?: User; error?: string }> => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    mode: 'cors',
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    return { error: 'Error Signin In' };
  }

  const user = response.body as unknown as User;
  return { user };
};
