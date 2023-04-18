import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Container } from "react-bootstrap";
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {

  return (
    <div className={inter.className}>
      <Head>
        <title  key="title">Nextjs NewsApp</title>
        <meta name="description" content="nextjs news app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <NavBar />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
  }
}
