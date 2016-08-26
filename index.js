import Authentication from './authentication/api';
import Users from './management/users-api';

class Auth0 {
  constructor(domain) {
    if (domain == null) {
      throw new Error("must supply a valid Auth0 domain");
    }
    let baseUrl = domain
    if (!domain.startsWith("http")) {
      baseUrl = `https://${domain}`;
    }
    this.baseUrl = baseUrl
  }

  authentication(clientId) {
    return new Authentication(clientId, this.baseUrl);
  }

  users(token) {
    return new Users(token, this.baseUrl);
  }
}

module.exports = Auth0;
