import { Boardup } from '../models/boardup';

const baseUrl = 'http://localhost:3001/board';

export const fetchBoardsByIds = async (
  ids: string[]
): Promise<{ boardups?: Boardup[]; error?: string }> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) {
    const error = await response.text();
    return { error };
  }

  const boardups = (await response.json()) as unknown as Boardup[];
  return { boardups };
};

export const fetchAllBoards = async (): Promise<{
  boardups?: Boardup[];
  error?: string;
}> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
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

  const boardups = (await response.json()) as unknown as Boardup[];
  return { boardups };
};
