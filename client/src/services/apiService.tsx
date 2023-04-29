//Makes requests to the back end
import { MockGame, Item } from '../types/types'
import { USER } from '../types/types'

const API_URL = process.env.REACT_APP_API_URL;

//CRUD operations to the boardups collection//
export async function fetchAllBoardUps(): Promise<MockGame[] | undefined> {

  try {
    const response = await fetch(`${API_URL}/board-ups`);
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
  
}

//CRUD operations to the users collection//
export async function fetchUser(username: string): Promise<USER | undefined>{

  try {
    const response = await fetch(`${API_URL}/user/${username}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json()
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }

}

export async function fetchBoard(id: string) {
    const response = await fetch(`${API_URL}/board-up/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return await response.json();
}

export async function postBoardUp(body: Item) {
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

export async function unattend(username: string, id: string) {
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