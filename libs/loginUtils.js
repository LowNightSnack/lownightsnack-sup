import {
  InvalidCreds,
  NetworkError,
  TokenExpired,
  TokenNotFound,
  TokenInvalid,
} from "./customErrorInstances";

const failureMessages = {
  incompleteRequest: "Please fill in all the required fields",
  usernameTooShort: "Username is too short",
  invalidUsername: "Invalid Username",
  networkError:
    "We are having problems communicating with our servers. Please hold on...",
  invalidCreds: "Incorrect username or password",
  tokenExpired: "Session expired. Please Login again",
  tokenNotFound: "Please Login first",
  tokenInvalid:
    "Do not try and impersonate the backend. You might end up in jail.",
};

const assignErrorMessage = (error) => {
  if (error instanceof InvalidCreds) return failureMessages.invalidCreds;
  if (error instanceof NetworkError) return failureMessages.networkError;
  if (error instanceof TokenExpired) return failureMessages.tokenExpired;
  if (error instanceof TokenNotFound) return failureMessages.tokenNotFound;
  if (error instanceof TokenInvalid) return failureMessages.tokenInvalid;
  return error.message;
};

const validateLoginRequest = (username, password) => {
  let warnObject = {};
  warnObject.warnings = false;
  let messages = [];
  if (!username || !password) {
    warnObject.warnings = true;
    warnObject.username = !username ? true : false;
    warnObject.password = !password ? true : false;
    messages.push(failureMessages.incompleteRequest);
  }
  if (username.length < 5) {
    warnObject.warnings = true;
    warnObject.username = true;
    messages.push(failureMessages.usernameTooShort);
  }
  if (warnObject.warnings) {
    warnObject.messages = messages;
    return warnObject;
  }
};

const validateLoginResponse = (resultToken) => {
  let errorObject = {};
  errorObject.errors = false;
  let messages = [];
  if (!resultToken.token) {
    errorObject.errors = true;
    errorObject.username = true;
    errorObject.password = true;
    messages.push(failureMessages.invalidCreds);
  }
  if (errorObject.errors) {
    errorObject.messages = messages;
    return errorObject;
  }
};

module.exports = {
  assignErrorMessage,
  validateLoginRequest,
  validateLoginResponse,
};
