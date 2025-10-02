module.exports = {
  createSession: () => {
    const SessionManager = require("./adatset-session");
    return new SessionManager();
  },
};
