const mainRouters = require("./main");
const sessionRouter = require("./session-router");
module.exports = {
  ...mainRouters,
  AsdServiceRestController: require("./AsdServiceRestController"),
  ...sessionRouter,
};
