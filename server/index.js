
require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('@koa/cors');
const connectDB = require('./DB/connectDB');
const PORT = process.env.SERVER_PORT || 3001;
const app = new Koa();

// Moving to ts


app.use(cors());
app.use(bodyParser());
// app.use(router.routes());

(async () => {
  // connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening 🍏 on port ${PORT}`);
  });

})();
