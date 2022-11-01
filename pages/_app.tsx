import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
