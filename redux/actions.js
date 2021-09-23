import * as types from "./types";

export const addError = (message) => ({
  type: types.ADDERR,
  payload: { message },
});

export const removeError = (message) => ({
  type: types.REMOVEERR,
  payload: { message },
});

export const clearErrors = () => ({
  type: types.CLEARERR,
});

export const addWarning = (message) => ({
  type: types.ADDWARN,
  payload: { message },
});

export const removeWarning = (message) => ({
  type: types.REMOVEWARN,
  payload: { message },
});

export const clearWarnings = () => ({
  type: types.CLEARWARN,
});

export const addUser = (user) => ({
  type: types.ADDUSER,
  payload: { user },
});

export const removeUser = () => ({
  type: types.REMOVEUSER,
});
