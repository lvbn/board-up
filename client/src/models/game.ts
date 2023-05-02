export interface Game {
  _id: string;
  name: string;
  minPlayers?: Number;
  maxPlayers?: Number;
  avgPlayingTime?: Number;
  mediaUrl: string;
}
