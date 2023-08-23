import { dehydrate } from '@tanstack/query-core';
import { Metadata } from 'next';

import { getPostDetail } from '@/api/getPosts';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import SsrDetailView from '@/views/SsrDetailPage';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostDetail(params.id);
  return {
    title: data?.title,
    description: data?.body,
  };
}
export default async function Page({ params }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['ssr-posts-detail', params.id], () =>
    getPostDetail(params.id, { cache: 'no-cache' }),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SsrDetailView />
    </Hydrate>
  );
}
