import { verifyToken } from "../libs/auth";

export async function cookieFetcher() {
  try {
    let result = await verifyToken();
    return result;
  } catch (error) {
    throw error;
  }
}
