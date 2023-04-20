const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('@koa/cors');
const connectDB = require('./DB/connectDB');

const app = new Koa();
const PORT = 8000;

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

(async () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening 🍏 on port ${PORT}`);
  });

})();
