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
    <div className={`${roboto.variable} font-sans`}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
