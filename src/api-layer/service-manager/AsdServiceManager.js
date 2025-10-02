const ApiManager = require("./ApiManager");

const { md5 } = require("common");

class AsdServiceManager extends ApiManager {
  constructor(request, options) {
    super(request, options);
    this.serviceCodename = "adatset-asd-service";
    this.membershipCache = new Map();
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
  }
}

module.exports = AsdServiceManager;
