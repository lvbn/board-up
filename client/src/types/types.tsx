
export type Item = {
  game: string,
  level: string,
  // location: string,
  // players: string,
  // date: string,
  // details: string,
  // email: string,
}


export type USER = {
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  status: string,
  myBUs: string[],
  hostingBoardups: string[],
  attendingBoardups: string[],
  photo: string
}

export type ReducedUser = {
  _id: string,
  username: string
}

export type Game = {
  _id: string,
  name: string
}

export type Boardup = {
  _id: string,
  title: string,
  host: ReducedUser[],
  game: Game[],
  level: string,
  numberOfPlayers: number,
  location: string,
  datetime: string,
  details: string,
  playersAttending: ReducedUser[]
}
