import { combineReducers } from "redux";
import * as types from "./types";
import { HYDRATE } from "next-redux-wrapper";

const errorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADDERR:
      return state.indexOf(payload.message) === -1
        ? [...state, payload.message]
        : state;
    case types.REMOVEERR:
      return state.filter((msg) => msg != payload.message);
    case types.CLEARERR:
      return [];
    default:
      return state;
  }
};

const warningsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADDWARN:
      return state.indexOf(payload.message) === -1
        ? [...state, payload.message]
        : state;
    case types.REMOVEWARN:
      return state.filter((msg) => msg != payload.message);
    case types.CLEARWARN:
      return [];
    default:
      return state;
  }
};

const clientReducer = combineReducers({
  errors: errorsReducer,
  warnings: warningsReducer,
});

const serverReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      const user = payload.client.user;
      const _state = {
        ...state.server,
        ...payload.server,
        user,
      };
      return _state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  server: serverReducer,
  client: clientReducer,
});

export default reducer;
