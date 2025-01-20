import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import NotificationBar from '@/components/NotificationBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import '@mantine/core/styles.css';
import MotionScrollProgress from '@/components/MotionScrollProgress';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Klothink',
  description: 'Developed by Vusal Alakbarov',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<IRootLayoutProps>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <MantineProvider>
          <MotionScrollProgress />
          <NotificationBar />
          <Header />
          {props.children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
