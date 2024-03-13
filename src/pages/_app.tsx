import { AppProps } from "next/app";
import { Navigation, Footer } from "@/components/Molecules";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
