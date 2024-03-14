import Head from "next/head"
import { Jumbotron } from "@/components/Molecules";
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
      <Jumbotron />
      <About />
      <Education />
      <EmploymentHistory />
      <Skills />
      <Works />
    </>
  );
}
