export interface Game {
  _id: string;
  name: String;
  minPlayers?: Number;
  maxPlayers?: Number;
  avgPlayingTime?: Number;
  mediaUrl: String;
}
