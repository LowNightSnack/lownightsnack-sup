import useSWR from "swr";

export default function useData(url, ...params) {
  const { data, mutate, error } = useSWR(url, (url, params ) => postFetcher);
  const loading = !data && !error;
  return {
    data,
    loading,
    error,
    mutateData: mutate,
  };
}
