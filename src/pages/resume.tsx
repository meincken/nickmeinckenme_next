import Head from "next/head"
import {
  EmploymentHistoryListResume
} from '@/clientComponents'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Nick Meincken Resume</title>
      </Head>
      <EmploymentHistoryListResume />
    </>
  );
}
