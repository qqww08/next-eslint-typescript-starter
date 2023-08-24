import '@/styles/globals.css';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

import QueryClientRegistry from '@/app/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/*
                    <head /> will contain the components returned by the nearest parent
           head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
              */}
      <head />
      <body>
        <QueryClientRegistry>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientRegistry>
      </body>
    </html>
  );
}
