import { fetcher, FetcherType } from '@/utils/fetcher';

export const getPosts = (init?: FetcherType) => {
  return fetcher(`https://jsonplaceholder.typicode.com/posts`, init);
};
export const getPostDetail = (id: string, init?: FetcherType) => {
  return fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`, init);
};
