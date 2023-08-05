import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col p-50 flex-1 flex-auto flex-col">
      <nav className="flex gap-30">
        <Link href="/ssr" prefetch>
          SSR PAGE
        </Link>
        <Link href="/ssg" prefetch>
          SSG PAGE
        </Link>
      </nav>
    </main>
  );
};
export default Home;
