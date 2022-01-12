import axios from "axios";
import { loginUrl } from "./apiEndpoints";
import { assignInstanceToError, sleep } from "./utils";

const login = async (username, password) => {
  // REMOVE THIS CODE AFTER BACKEND API IS ONLINE
  if (username === "student" && password === "student") {
    await sleep(3000);
    return { token: "student" };
  }
  if (username === "teacher" && password === "teacher") {
    await sleep(3000);
    return { token: "teacher" };
  }
  if (username === "hmmhmm" && password === "hmmhmm") {
    await sleep(3000);
    return { token: false };
  }
  // TILL HERE

  try {
    return await axios.post(loginUrl, { username, password });
  } catch (error) {
    throw assignInstanceToError(error);
  }
};

module.exports = {
  login,
};
