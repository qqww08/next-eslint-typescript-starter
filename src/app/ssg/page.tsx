import Link from "next/link";

import { Posts } from "@/types/posts";
import { fetcher } from "@/utils/fetcher";

export default async function Page() {
  const data = await fetcher<Posts[]>(`https://jsonplaceholder.typicode.com/posts`);

  return (
    <main>
      <ul className="flex flex-col gap-30">
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/ssg/${item.id}`}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
