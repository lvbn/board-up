const query = require('./BU.queries');

module.exports = {
 
  showall: async (ctx) => {
    try {
      const bus = await query.findAll();
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
      const { game, level, players, location, date, details, email} = ctx.request.body;
      
      const bu = await query.saveBU(game, level, players, location, date, details, email);
      
      ctx.response.status = 201;

    } catch (err) {
      console.log(err)
      ctx.response.status = 500;
      ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
    }
  },

};