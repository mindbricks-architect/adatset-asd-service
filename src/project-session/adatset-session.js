const { NotAuthenticatedError, ForbiddenError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const HexaAuth = require("./hexa-auth");

class AdatsetSession extends HexaAuth {
  constructor() {
    super();
    this.ROLES = {
      superAdmin: "superAdmin",

      admin: "admin",
      user: "user",
      userManager: "userManager",
    };

    this.projectName = "adatset";
    this.projectCodename = "adatset";
    this.isJWT = true;
    this.isJWTAuthRSA = true;
    this.isRemoteAuth = false;
    this.useRemoteSession = false;
  }

  userHasRole(roleName) {
    const userRoleInSession = this.session?.roleId;
    if (!userRoleInSession) return false;
    return Array.isArray(userRoleInSession)
      ? userRoleInSession.includes(roleName)
      : userRoleInSession == roleName;
  }
}

module.exports = AdatsetSession;
