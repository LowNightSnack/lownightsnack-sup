import axios from "axios";
import { verifyUrl } from "./apiEndpoints";
import {
  TokenExpired,
  TokenInvalid,
  TokenNotFound,
} from "./customErrorInstances";
import { parseCookies } from "./parseCookies";
import { assignInstanceToError, sleep } from "./utils";

const verifyFetcher = async () => {
  const token = parseCookies()["accessToken"];
  // REMOVE THIS CODE AFTER BACKEND API IS ONLINE
  if (token === "student") {
    await sleep(3000);
    return {
      username: "student",
      password: "encryptedSomething",
      type: "student",
    };
  }
  if (token === "teacher") {
    await sleep(3000);
    return {
      username: "teacher",
      password: "encryptedSomethingforTeacher",
      type: "teacher",
    };
  }
  // TILL HERE

  try {
    if (token === "false" || !token) throw new TokenNotFound();
    let result = await axios.post(verifyUrl, token);
    if (result.name === "TokenExpiredError") throw new TokenExpired();
    if (result.name === "JsonWebTokenError") throw new TokenInvalid();
    return result;
  } catch (error) {
    throw assignInstanceToError(error);
  }
};

module.exports = {
  verifyFetcher,
};
