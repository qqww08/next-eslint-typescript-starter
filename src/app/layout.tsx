import '@/styles/globals.css';
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
        <QueryClientRegistry>{children}</QueryClientRegistry>
      </body>
    </html>
  );
}
