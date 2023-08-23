import { dehydrate } from '@tanstack/query-core';

import { getPosts } from '@/api/getPosts';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import SsgView from '@/views/SsgPage';

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['ssg-posts'], () => getPosts());
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SsgView />
    </Hydrate>
  );
}
