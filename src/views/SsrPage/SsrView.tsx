'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { getPosts } from '@/api/getPosts';
import { Posts } from '@/types/posts';

const SsrView = () => {
  const { data } = useQuery<Posts[]>(['ssr-posts'], () => getPosts());
  return (
    <main className="flex flex-col gap-30">
      <h1 className="text-20 font-bold text-emerald-700">SSR PAGE</h1>
      <ul className="flex flex-col gap-30">
        {data?.map((item) => {
          return (
            <li key={item.id} className="ripple px-20">
              <Link href={`/ssr/${item.id}`}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SsrView;
