//Makes requests to the back end
import { Item } from '../types/types'
import { USER, Boardup } from '../types/types'

const API_URL = process.env.REACT_APP_API_URL;

export async function fetchAllBoardUps(): Promise<Boardup[] | undefined> {
  try {
    const response = await fetch(`${API_URL}/board-ups`);
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchUser(username: string): Promise<USER | undefined>{
  try {
    const response = await fetch(`${API_URL}/user/${username}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchBoard(id: string) {
    try {
      const response = await fetch(`${API_URL}/board-up/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
}

export async function postBoardUp(body: Item) {
  try {
    const response = await fetch(`${API_URL}/new-board-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function unattend(username: string, id: string) {
  try {
    const response = await fetch(`${API_URL}/user/${username}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, id}),
    });
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}