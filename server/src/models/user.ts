import mongoose, { ObjectId, Schema } from 'mongoose';

export interface IUser {
  _id?: ObjectId | string;
  name: string;
  email: string;
  password: string;
  hostingBoardups: ObjectId[];
  attendingBoardups: ObjectId[];
}

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hostingBoardups: {
    type: [Schema.Types.ObjectId],
    ref: 'Boardup',
    default: [],
  },
  attendingBoardups: {
    type: [Schema.Types.ObjectId],
    ref: 'Boardup',
    default: [],
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);
