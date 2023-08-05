import qs from "qs";

export type FetcherType = Omit<RequestInit, "body"> & {
  params?: Record<string, string>;
  data?: Record<string, string>;
};
export const fetcher = async <TResponse>(input: string, init?: FetcherType) => {
  try {
    let queryString = "";
    let body = null;

    if (init?.params) {
      queryString = `?${qs.stringify(init.params)}`;
    }
    if (init?.data) {
      body = JSON.stringify(init.data);
    }
    return await fetch(`${input}${queryString}`, { ...init, body }).then(
      (res) => res.json() as TResponse,
    );
  } catch (error) {
    console.error(error);
  }
};
