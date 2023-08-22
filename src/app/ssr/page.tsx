import Link from 'next/link';

import { Posts } from '@/types/posts';
import { fetcher } from '@/utils/fetcher';

const Page = async () => {
  const data = await fetcher<Posts[]>(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      cache: 'no-cache',
    },
  );

  return (
    <main>
      <ul className="flex flex-col gap-30">
        {data?.map((item) => {
          return (
            <li key={item.id}>
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

export default Page;
