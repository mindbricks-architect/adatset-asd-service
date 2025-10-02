const AsdServiceRestController = require("./AsdServiceRestController");

module.exports = (name, routeName, req, res) => {
  const restController = new AsdServiceRestController(
    name,
    routeName,
    req,
    res,
  );
  return restController;
};
