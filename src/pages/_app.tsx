import Head from "next/head"
import { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Header } from "@/clientComponents";
import "../styles/index.css";

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  variable: '--font-roboto'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <main className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
    </>
  );
}

export default MyApp;
