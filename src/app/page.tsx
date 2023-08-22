import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="flex flex-auto flex-col p-50">
      <nav className="flex gap-30">
        <Link href="/ssr">SSR PAGE</Link>
        <Link href="/ssg">SSG PAGE</Link>
        <a href="mychat://view?pathname=ssg">setting</a>
      </nav>
    </main>
  );
};
export default Home;
