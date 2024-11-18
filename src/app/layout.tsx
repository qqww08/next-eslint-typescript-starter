import './globals.css';

import QueryProviders from '@/providers/tanstack-query/QueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
