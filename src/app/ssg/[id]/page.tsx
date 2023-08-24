import { dehydrate } from '@tanstack/query-core';
import { Metadata } from 'next';

import { Posts } from '@/types/posts';
import { getPostDetail, getPosts } from '@/utils/getPosts';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import SsgDetailView from '@/views/SsgDetailPage/SsgDetailView';
interface Props {
  params: { id: string };
}
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const data = (await getPosts()) as Posts[];
  return data.map((res) => ({ id: String(res.id) }));
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
  await queryClient.prefetchQuery(['ssg-posts-detail', params.id], () =>
    getPostDetail(params.id),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SsgDetailView />
    </Hydrate>
  );
}
