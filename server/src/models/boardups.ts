import mongoose, { ObjectId, Schema } from 'mongoose';

export interface IBoardup {
  _id?: ObjectId | string;
  host: string;
  game: string;
  level: string;
  players: number;
  location: string;
  datetime: string;
  details: string;
  attending: ObjectId | string[];
}

export const BoardupSchema = new Schema<IBoardup>({
  host: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  players: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  attending: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
});

export const Boardup = mongoose.model<IBoardup>('Boardup', BoardupSchema);
