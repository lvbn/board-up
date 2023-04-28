export type MockGame = {

  gameID: string;
  gameName: string;
  minplayers: number;
  maxplayers: number;
  playingtime: number;
  image: string;
}

export type Item = {
  game: string,
  level: string,
  location: string,
  players: string,
  date: string,
  details: string,
  email: string,
}

export type USER = {
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  status: string,
  myBUs: string[],
  hosting: string[],
  photo: string
  }