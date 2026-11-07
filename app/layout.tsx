import type { Metadata, Viewport } from 'next';
import './globals.css';
import LenisScroll from '@/components/LenisScroll';

export const metadata: Metadata = {
  title: {
    template: '%s | Sukanya Pandey',
    default: 'Sukanya Pandey — Senior Tax Associate',
  },
  description:
    'Sukanya Pandey is a Senior Tax Associate at Ryan Tax Services, specialising in US Sales & Use Tax, multi-state compliance, tax preparation and reconciliation.',
  authors: [{ name: 'Sukanya Pandey' }],
  creator: 'Sukanya Pandey',
  publisher: 'Sukanya Pandey',
  robots: 'index, follow',
  category: 'portfolio',
  openGraph: {
    title: 'Sukanya Pandey — Senior Tax Associate',
    description:
      'Finance and taxation professional with experience across Indian accounting and US Sales & Use Tax operations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sukanya Pandey',
    images: [
      {
        url: '/images/sukanya-portrait.png',
        width: 800,
        height: 800,
        alt: 'Sukanya Pandey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukanya Pandey — Senior Tax Associate',
    creator: '@sukanyapandey07',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f1e7',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
