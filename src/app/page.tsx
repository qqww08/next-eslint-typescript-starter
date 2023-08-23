import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="flex flex-auto flex-col p-50">
      <nav className="flex items-center gap-30">
        <Link href="/ssr">SSR PAGE</Link>
        <Link href="/ssg">SSG PAGE</Link>
      </nav>
    </main>
  );
};
export default Home;
