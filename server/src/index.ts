import * as dotenv from 'dotenv';

import connectDB from './database';

import { configApp } from './app';

dotenv.config();

const app = configApp();

// Listen
(async () => {
  const { success, error } = await connectDB();

  if (!success) return;

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`⚡️ Server started on http://localhost:${PORT}`);
  });
})();
