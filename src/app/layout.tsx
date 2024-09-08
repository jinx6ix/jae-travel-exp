import React from 'react';
import { Metadata } from 'next';
import { AdminBar } from './_components/AdminBar';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import TopBar from './_components/Topbar';
import { Providers } from './_providers';
import { InitTheme } from './_providers/Theme/InitTheme';
import { mergeOpenGraph } from './_utilities/mergeOpenGraph';
import './_css/app.scss';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar />
          <TopBar />
          {/* @ts-expect-error */}
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
        {/* Google Translate widget */}
        {/* <GoogleTranslate /> */}
        <GoogleAnalytics gaId="G-7KXD0B7Z19" />
        <GoogleTagManager gtmId="G-7KXD0B7Z19" />
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://jaetravel.co.ke/'),
  twitter: {
    card: 'summary_large_image',
    creator: '@petercubolt',
  },
  openGraph: mergeOpenGraph(),
};