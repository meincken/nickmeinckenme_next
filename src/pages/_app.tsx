import Head from "next/head"
import { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        <title>{`Nick Meincken`}</title>
        <meta name="description" content={`Welcome to the online profile of Nick Meincken, full stack, front end developer. I specialise in reusable UI component libraries and front end styleguides for rapid development.`} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`/img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`/img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`/img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`Nick Meincken`} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`/img/og-image.jpg`}
        />
      </Head>
      <main className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
    </>
  );
}

export default MyApp;
