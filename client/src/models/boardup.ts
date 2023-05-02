import { Game } from './game';
import { User } from './user';

export interface Boardup {
  _id: string;
  host: User;
  game: Game;
  level: string;
  players: number;
  location: string;
  datetime: string;
  details: string;
  attending: User[];
}
