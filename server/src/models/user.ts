import mongoose, { MongooseError, ObjectId, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  _id?: ObjectId | string;
  username: string;
  password?: string;
  hostingBoardups: ObjectId[];
  attendingBoardups: ObjectId[];
}

export interface IReducedUser {
  _id: string;
  username: string;
}

export const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
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

export const findById = async (
  id: string
): Promise<{ user?: IUser; error?: MongooseError }> => {
  try {
    const user = await User.findById(id).orFail();
    return {
      user: {
        _id: user.id,
        username: user.username,
        hostingBoardups: user.hostingBoardups,
        attendingBoardups: user.attendingBoardups,
      },
    };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};

export const addToAttending = async (
  userId: string,
  boardupId: string
): Promise<{ success: boolean; error?: MongooseError }> => {
  try {
    const user = await User.findById(userId).orFail();
    const boardupCastedId = new mongoose.Schema.Types.ObjectId(boardupId);
    user.attendingBoardups.push(boardupCastedId);

    await user.save();
    return { success: true };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { success: false, error: mongooseError };
  }
};

export const findByUsername = async (
  username: string
): Promise<{ user?: IUser; error?: MongooseError }> => {
  try {
    const user = await User.findOne({ username }).orFail();
    return {
      user: {
        _id: user.id,
        username: user.username,
        password: user.password,
        hostingBoardups: user.hostingBoardups,
        attendingBoardups: user.attendingBoardups,
      },
    };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};

export const create = async (
  username: string,
  password: string
): Promise<{ user?: IUser; error?: MongooseError }> => {
  try {
    // const user = await User.create({name, })
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username: username,
      password: hashedPassword,
    });

    return {
      user: {
        _id: user.id,
        username: user.username,
        hostingBoardups: [],
        attendingBoardups: [],
      },
    };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
  }
};
