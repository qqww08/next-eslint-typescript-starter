import qs from 'qs';

export type FetcherType = Omit<RequestInit, 'body'> & {
  params?: Record<string, string>;
  data?: Record<string, string>;
};
export const fetcher = async (input: string, init?: FetcherType) => {
  try {
    let queryString = '';
    let body = null;
    const headers = {
      'Content-type': 'application/json',
      ...init?.headers,
    };
    if (init?.params) {
      queryString = `?${qs.stringify(init.params)}`;
    }

    if (init?.data) {
      body = JSON.stringify(init.data);
    }

    return await fetch(`${input}${queryString}`, {
      ...init,
      headers,
      body,
    }).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
};
