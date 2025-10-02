const AsdServiceGrpcController = require("./AsdServiceGrpcController");

module.exports = (name, routeName, call, callback) => {
  const grpcController = new AsdServiceGrpcController(
    name,
    routeName,
    call,
    callback,
  );
  return grpcController;
};
