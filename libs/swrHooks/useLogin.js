import useSWR from "swr";
import { cookieFetcher } from "../fetchers";
import { verifyTokenKey } from "./swrKeys";

export default function useLogin() {
  const { data, mutate, error } = useSWR(verifyTokenKey, cookieFetcher);
  let user = data;
  if (error) user = null;
  const loading = !data && !error;
  return {
    user,
    loading,
    error,
    mutateUser: mutate,
  };
}
