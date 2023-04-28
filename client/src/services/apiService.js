//Makes requests to the back end
const API_URL = process.env.REACT_APP_API_URL;

//CRUD operations to the boardups collection//
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

//CRUD operations to the users collection//
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

export async function unattend(username, id) {
  const response = await fetch(`${API_URL}/user/${username}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, id}),
  });
  if (!response.ok) {
    throw new Error('Failed to update');
  }
  return await response.json();
}