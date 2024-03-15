import Head from "next/head"
import { Jumbotron, Navigation, Footer } from "@/components/Molecules";
import {
  About,
  Education,
  EmploymentHistory,
  Skills,
  Works
} from '@/components/Organisms'

export default function Index() {
  return (
    <>
      <Head>
        <title>Nick Meincken</title>
      </Head>
      <Navigation />
      <Jumbotron />
      <About />
      <Education />
      <hr />
      <EmploymentHistory />
      <hr />
      <Skills />
      <hr />
      <Works />
      <Footer />
    </>
  );
}
