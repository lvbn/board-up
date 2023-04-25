//Makes requests to the back end

const API_URL = 'http://localhost:8000';

export async function fetchAllBoardUps() {
  const response = await fetch(`${API_URL}/board-ups`);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return await response.json();
}

export async function fetchBoard(id) {
    const response = await fetch(`${API_URL}/board-up/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return await response.json();
}

export async function postBoardUp(body) {
  const response = await fetch(`${API_URL}/new-board-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error('Failed to post');
  }
  await response.json();
  return
}

export async function fetchUser(username) {
  const response = await fetch(`${API_URL}/user/${username}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return await response.json();
}

