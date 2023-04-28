import mongoose, { ObjectId, Schema } from 'mongoose';

export interface IGame {
  _id: ObjectId | string;
  name: String;
  minPlayers: Number;
  maxPlayers: Number;
  avgPlayingTime: Number;
  mediaUrl: String;
}

export const GameSchema = new Schema<IGame>({
  name: {
    type: String,
    required: true,
  },
  minPlayers: {
    type: Number,
    required: true,
  },
  maxPlayers: {
    type: Number,
    required: true,
  },
  avgPlayingTime: {
    type: Number,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

export const Game = mongoose.model<IGame>('Game', GameSchema);
