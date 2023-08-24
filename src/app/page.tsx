'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { fetcher } from '@/utils/fetcher';

const Home: NextPage = () => {
  useEffect(() => {
    fetcher('/api/posts');
  }, []);

  return (
    <main className="flex flex-auto flex-col p-50">
      <nav className="flex items-center gap-30">
        <Link href="/ssr" className="ripple px-20 py-5">
          SSR PAGE
        </Link>
        <Link href="/ssg" className="ripple px-20 py-5">
          SSG PAGE
        </Link>
      </nav>
      <Image src="/big-size-img.jpg" alt="big" width={500} height={500} />
    </main>
  );
};
export default Home;
