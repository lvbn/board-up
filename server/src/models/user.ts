import mongoose, { Document, MongooseError, ObjectId, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  _id?: ObjectId | string;
  username: string;
  password?: string;
  hostingBoardups: ObjectId[];
  attendingBoardups: ObjectId[];
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
        hostingBoardups: [],
        attendingBoardups: [],
      },
    };
  } catch (error) {
    const mongooseError = error as MongooseError;
    return { error: mongooseError };
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
        hostingBoardups: [],
        attendingBoardups: [],
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
