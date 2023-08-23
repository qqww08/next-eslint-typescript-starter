import { dehydrate } from '@tanstack/query-core';

import { getPosts } from '@/api/getPosts';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import SsrView from '@/views/SsrPage';

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['ssr-posts'], () =>
    getPosts({ cache: 'no-cache' }),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SsrView />
    </Hydrate>
  );
};

export default Page;
