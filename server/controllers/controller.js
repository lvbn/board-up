const boardUpQuery = require('./BU.queries');
const userQuery = require('./user.queries');

module.exports = {
 
  showall: async (ctx) => {
    try {
      const bus = await boardUpQuery.findAll();
      ctx.body = bus;
      ctx.response.status = 200;
    } catch (err) {
      console.log(err)
      ctx.response.status = 400;
      ctx.redirect('https://httpstatusdogs.com/img/400.jpg');
    }
  },

  postBU: async (ctx) => {
    try {
      console.log(ctx)
      // gamename, gameimage, gameID
      const { game, level, players, location, date, details, email} = ctx.request.body;
      console.log(game)
      const bu = await boardUpQuery.saveBU(game, level, players, location, date, details, email);
      
      ctx.response.status = 201;

    } catch (err) {
      console.log(err)
      ctx.response.status = 500;
      ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
    }
  },


  createUser: async (ctx) => {
    try {
      const { firstname, lastname, username, email, status, mygames, myBUs, photo} = ctx.request.body;
      const bu = await userQuery.saveUser(firstname, lastname, username, email, status, mygames, myBUs, photo);
      
      ctx.response.status = 201;

    } catch (err) {
      console.log(err)
      ctx.response.status = 500;
      ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
    }
  },

  getUser: async (ctx) => {
    try {
        const { id } = ctx.request.body;
        console.log(id)
        const bu = await userQuery.findUser(id);
        
        ctx.response.status = 200;

      } catch (err) {
        console.log(err)
        ctx.response.status = 400;
        ctx.redirect('https://httpstatusdogs.com/img/400.jpg');
      }
  }

};