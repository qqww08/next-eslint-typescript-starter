'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { getPostDetail } from '@/api/getPosts';
import { Posts } from '@/types/posts';

const SsrDetailView = () => {
  const params = useParams();
  const { data } = useQuery<Posts>(['ssr-posts-detail', params.id], () =>
    getPostDetail(params.id as string),
  );
  return (
    <main className="flex flex-col gap-30">
      <h1 className="text-20 font-bold text-emerald-700">SSR DETAIL PAGE</h1>

      <div className="flex flex-col">
        <div className="">
          <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
            {data?.title}
          </h1>
          <p className="line-clamp-3 font-medium text-gray-500">{data?.body}</p>
        </div>
      </div>
    </main>
  );
};

export default SsrDetailView;
