import mongoose, { MongooseError, ObjectId, Schema } from 'mongoose';
import { IReducedUser } from './user';

export interface IBoardup {
  _id?: ObjectId | string;
  host: ObjectId | string | IReducedUser;
  game: ObjectId | string;
  level: string;
  players: number;
  location: string;
  datetime: string;
  details: string;
  attending: ObjectId[] | string[] | IReducedUser[];
}

export const BoardupSchema = new Schema<IBoardup>({
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
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

export const create = async (
  data: IBoardup
): Promise<{ board?: IBoardup; error?: MongooseError }> => {
  try {
    const board = await Boardup.create(data);
    return { board };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};

export const fetchAll = async (): Promise<{
  boards?: IBoardup[];
  error?: MongooseError;
}> => {
  try {
    const boards = await Boardup.find().populate(
      'host attending',
      '_id username'
    );
    return { boards };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};

export const fetch = async (
  ids?: string[],
  exclude?: string
): Promise<{ boards?: IBoardup[]; error?: MongooseError }> => {
  try {
    if (ids) {
      const boards = await Boardup.find({ _id: { $in: ids } }).populate(
        'host attending',
        '_id username'
      );
      return { boards };
    } else if (exclude) {
      const boards = await Boardup.find({ host: { $nin: [exclude] } }).populate(
        'host attending',
        '_id username'
      );
      return { boards };
    } else {
      const boards = await Boardup.find().populate(
        'host attending',
        '_id username'
      );
      return { boards };
    }
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};
