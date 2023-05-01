const boardUpQuery = require('./BU.queries');
const userQuery = require('./user.queries');

const { USERS, BOARDUPS } = require('../DB/mockUser')

const getUser = async (ctx) => {
  // console.log(USERS[0])
  ctx.response.status = 200;
  ctx.body = USERS[0];
}

const showAll = async (ctx) => {
  console.log(BOARDUPS)
  ctx.response.status = 200;
  ctx.body = BOARDUPS;
}

module.exports = {
  getUser,
  showAll
}


// module.exports = {

//   showall: async (ctx) => {
//     try {
//       const bus = await boardUpQuery.findAll();
//       ctx.body = bus;
//       ctx.response.status = 200;
//     } catch (err) {
//       console.log(err)
//       ctx.response.status = 400;
//       ctx.redirect('https://httpstatusdogs.com/img/400.jpg');
//     }
//   },

//   findBoard: async (ctx) => {
//     try {
//         const id = ctx.params.id;
//         console.log(id)
//         const bu = await boardUpQuery.findBoardById(id);
//         ctx.response.status = 200;
//         // console.log(bu)
//         ctx.body = bu;

//       } catch (err) {
//         console.log(err)
//         ctx.response.status = 400;
//         ctx.redirect('https://httpstatusdogs.com/img/400.jpg');
//       }
//   },

//   postBU: async (ctx) => {
//     try {
//       console.log(ctx)
//       // gamename, gameimage, gameID
//       const { game, level, players, location, date, details, email} = ctx.request.body;
//       console.log(game)
//       const bu = await boardUpQuery.saveBU(game, level, players, location, date, details, email);

//       ctx.response.status = 201;

//     } catch (err) {
//       console.log(err)
//       ctx.response.status = 500;
//       ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
//     }
//   },


//   createUser: async (ctx) => {
//     try {
//       const { firstname, lastname, username, email, status, mygames, myBUs, hosting, photo} = ctx.request.body;
//       const bu = await userQuery.saveUser(firstname, lastname, username, email, status, mygames, myBUs, hosting, photo);

//       ctx.response.status = 201;

//     } catch (err) {
//       console.log(err)
//       ctx.response.status = 500;
//       ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
//     }
//   },

//   getUser: async (ctx) => {
//     // try {
//     //     const username = ctx.params.username
//     //     console.log(username)
//     //     const bu = await userQuery.findUser(username);
//     //     ctx.response.status = 200;
//     //     ctx.body = bu;

//     //   } catch (err) {
//     //     console.log(err)
//     //     ctx.response.status = 400;
//     //     ctx.redirect('https://httpstatusdogs.com/img/400.jpg');
//     //   }

//     console.log(USERS[0])
//   }

// };