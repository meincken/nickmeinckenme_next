import Head from "next/head"
import { Jumbotron, Navigation, Footer } from "@/components/Molecules";
import {
  About,
  Education,
  EmploymentHistory,
  Skills,
  Works
} from '@/components/Organisms'
import data from '@/content/config.json'

export default function Index() {
  return (
    <>
      <Head>
        <title>{data.sitemeta.title}</title>
      </Head>
      <Navigation />
      <Jumbotron />
      <About />
      <Education />
      <EmploymentHistory />
      <Skills />
      <Works />
      <Footer />
    </>
  );
}
