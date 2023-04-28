import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import connectDB from './database';

dotenv.config();

const app: Express = express();

app.use(express.json());

// Auth middleware

// Listen
(async () => {
  const { success, error } = await connectDB();

  if (!success) return;

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`⚡️ Server started on http://localhost:${PORT}`);
  });
})();
