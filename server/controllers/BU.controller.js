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
      const { gameName, gameLevel, maxNoOfParticipants,
        location, date, details, contactInfo } = ctx.request.body;
      
      const bu = await query.saveBU(gameName, gameLevel, maxNoOfParticipants,
        location, date, details, contactInfo);
      
      ctx.response.status = 201;

    } catch (err) {
      console.log(err)
      ctx.response.status = 500;
      ctx.redirect('https://httpstatusdogs.com/img/500.jpg');
    }
  },

};