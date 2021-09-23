function NetworkError() {
  this.name = "NetworkError";
  this.message = "Network Error: Host Unreachable";
}
NetworkError.prototype = Object.create(Error.prototype);

function InvalidCreds() {
  this.name = "InvalidCreds";
  this.message = "Invalid Credentials: Username or Password Incorrect";
}
InvalidCreds.prototype = Object.create(Error.prototype);

function TokenExpired() {
  this.name = "TokenExpired";
  this.message = "Token Expired: Login again";
}
TokenExpired.prototype = Object.create(Error.prototype);

function TokenNotFound() {
  this.name = "TokenNotFound";
  this.message = "Token not found: Login Required";
}
TokenNotFound.prototype = Object.create(Error.prototype);

function TokenInvalid() {
  this.name = "TokenInvalid";
  this.message = "Token invalid: Not issued by the backend";
}
TokenInvalid.prototype = Object.create(Error.prototype);

module.exports = {
  NetworkError,
  InvalidCreds,
  TokenExpired,
  TokenNotFound,
  TokenInvalid,
};
