import { AppProps } from "next/app";
import { Roboto } from 'next/font/google'
import "../styles/index.css";

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  variable: '--font-roboto'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
