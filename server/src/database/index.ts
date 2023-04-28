import mongoose, { MongooseError } from 'mongoose';

const connectDB = async (): Promise<{
  success: boolean;
  error?: MongooseError;
}> => {
  const user = process.env.MONGODB_USER;
  const pass = process.env.MONGODB_PASS;

  const uri = `mongodb+srv://${user}:${pass}@cluster0.scx5rkh.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, { dbName: 'boardDB' });
    console.log('🚀 Connected to DB');
    return { success: true };
  } catch (error) {
    const mongooseError = error as MongooseError;
    console.log('Error connecting to DB: ', mongooseError.message);
    return { success: false, error: mongooseError };
  }
};

export default connectDB;
