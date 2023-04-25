const Router = require('koa-router');
const controller = require('./controllers/controller');

const router = new Router();

// board ups
router.get('/board-ups', controller.showall);

router.get('/board-up/:id', controller.findBoard);

router.post('/new-board-up', controller.postBU); //BU = Board-Up


// Users
router.get('/user/:username', controller.getUser);

router.post('/newuser', controller.createUser); 

//Provisional routes for 2 different users:
// -> @TNT
// router.post('/user:TNT', controller.getUser); 
// ->@cyberpunk
router.post('/user:cyberpunk', controller.getUser); 

module.exports = router;