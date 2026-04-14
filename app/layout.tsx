import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const socialImagePath = '/unfurling-social.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Trevor Borden — Alkami Portfolio',
  description:
    'Portfolio review for Alkami — Trevor Borden, Lead Product Designer (Data & Marketing). Case studies: Procore Construction Network, Scout Fuel coded prototype, and background.',
  openGraph: {
    title: 'Trevor Borden — Alkami Portfolio',
    description:
      'Portfolio review for Alkami — Trevor Borden, Lead Product Designer (Data & Marketing). Case studies: Procore Construction Network, Scout Fuel coded prototype, and background.',
    type: 'website',
    images: [
      {
        url: socialImagePath,
        alt: 'Trevor Borden portfolio review for Alkami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trevor Borden — Alkami Portfolio',
    description:
      'Portfolio review for Alkami — Trevor Borden, Lead Product Designer (Data & Marketing). Case studies: Procore Construction Network, Scout Fuel coded prototype, and background.',
    images: [socialImagePath],
  },
};

export const viewport: Viewport = {
  themeColor: '#f7f7f4',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
