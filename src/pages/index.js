import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainHeader from "@/components/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Miki Ivanovic - site</title>
        <meta name="description" content="Portfilio sajt Miki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <MainHeader />
        <main className={styles.main}>
          <h2>Dobrodosli</h2>
          <h1>Portfolio stranica Miki Ivanovic</h1>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
