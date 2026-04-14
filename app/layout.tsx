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
      <body>
        <div className="desktop-only-shell">{children}</div>
        <main className="mobile-splash" aria-label="Desktop required message">
          <div className="mobile-splash-brand">
            <p className="mobile-splash-for">For:</p>
            <img className="mobile-splash-logo" src="/Alkami_Logo_GRAD_RGB.svg" alt="Alkami logo" />
          </div>
          <div className="mobile-splash-inner">
            <p className="mobile-splash-kicker">Desktop Experience</p>
            <h1 className="mobile-splash-title">
              This site is meant to be enjoyed on desktop.
              <br />
              <br />
              Please open the link on desktop to continue.
            </h1>
            <p className="mobile-splash-meta">Trevor Borden Portfolio Review - 2026</p>
          </div>
        </main>
      </body>
    </html>
  );
}
