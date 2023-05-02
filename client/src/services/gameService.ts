import { Game } from '../models/game';

const baseUrl = 'http://localhost:3001/game';

export const fetchGames = async (): Promise<{
  games?: Game[];
  error?: string;
}> => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.text();
    return { error };
  }

  const games = (await response.json()) as unknown as Game[];
  return { games };
};
