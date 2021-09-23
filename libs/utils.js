import Router from "next/router";
import { NetworkError } from "./customErrorInstances";

export const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const redirect = async (redirectURL, redirectCode, res = null) => {
  if (res) {
    res.writeHead(redirectCode, { Location: redirectURL });
    res.end();
  } else {
    Router.push(redirectURL);
  }
};

export const assignInstanceToError = (error, errorType = null) => {
  // Only for instanceless system errors like network error
  if (errorType) return new errorType();
  if (error.message === "Network Error") return new NetworkError();
  return error;
};
