const AsdServiceMcpController = require("./AsdServiceMcpController");

module.exports = (name, routeName, params) => {
  const mcpController = new AsdServiceMcpController(name, routeName, params);
  return mcpController;
};
