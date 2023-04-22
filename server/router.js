const Router = require('koa-router');
const controller = require('./controllers/controller');

const router = new Router();

// GETS
router.get('/board-ups', controller.showall);
// POSTS
router.post('/new-board-up', controller.postBU); //BU = Board-Up

//Provisional routes for 2 different users:
// -> @TNT
router.post('/user:TNT', controller.getUser); 
// ->@cyberpunk
router.post('/user:cyberpunk', controller.getUser); 
// -> @TNT
// router.post('/user:TNT', controller.createUser); 
// ->@cyberpunk
// router.post('/user:cyberpunk', controller.createUser); 

module.exports = router;