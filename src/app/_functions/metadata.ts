import { Metadata } from 'next';

const PATH = '/';
const APP_TITLE = '신대현';
const APP_TITLE_TEMPLATE = `%s - ${APP_TITLE}`;
const APP_DESCRIPTION = 'next-eslint-typescript-starter';
const OG_IMAGE = '/og.png';

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_TITLE,
  },
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`),
  alternates: {
    canonical: PATH,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_TITLE,
    url: PATH,
    title: {
      default: APP_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: OG_IMAGE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: OG_IMAGE,
    description: APP_DESCRIPTION,
  },
  verification: {
    google: '',
    other: {},
  },
};
