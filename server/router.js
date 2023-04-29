const Router = require('koa-router');
// const controller = require('./controllers/controller');

const { getUser, showAll } = require('./controllers/controller')

const router = new Router();

// // board ups
router.get('/board-ups', showAll);

// router.get('/board-up/:id', controller.findBoard);

// router.post('/new-board-up', controller.postBU); //BU = Board-Up


// Users
router.get('/user/:username', getUser);

// router.post('/newuser', controller.createUser);


module.exports = router;