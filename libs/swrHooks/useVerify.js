import useSWR from "swr";
import { verifyFetcher } from "../fetchers";
import { verifyFetcherKey } from "./swrKeys";

export default function useVerify() {
  const { data, mutate, error } = useSWR(verifyFetcherKey, verifyFetcher);
  const loading = !data && !error;
  return {
    verifyUser: !error ? data : null,
    verifyLoading: loading,
    verifyError: error,
    verifyMutate: mutate,
  };
}
