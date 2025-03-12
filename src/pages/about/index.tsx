import Head from "next/head";
import Link  from "next/link";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className={geistMono.className}>アバウトページです。</p>
        <Link href='/' key='ToAbout' >Topページへ移動</Link>
      </main>
    </>
  );
}

