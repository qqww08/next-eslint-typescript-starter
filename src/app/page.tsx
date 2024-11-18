'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="p-50 flex flex-auto flex-col">
      <nav className="gap-30 flex items-center">
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
