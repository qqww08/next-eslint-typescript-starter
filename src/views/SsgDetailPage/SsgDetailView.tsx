'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { Posts } from '@/types/posts';
import { getPostDetail } from '@/utils/getPosts';

const SsgDetailView = () => {
  const params = useParams();
  const { data } = useQuery<Posts>(['ssg-posts-detail', params.id], () =>
    getPostDetail(params.id as string),
  );
  return (
    <div className="flex flex-col gap-30">
      <h1 className="text-20 font-bold text-emerald-700">SSG DETAIL PAGE</h1>

      <div className="">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {data?.title}
        </h1>
        <p className="line-clamp-3 font-medium text-gray-500">{data?.body}</p>
      </div>
    </div>
  );
};

export default SsgDetailView;
