import Head from "next/head"
import {
  EducationList,
  EmploymentHistoryListResume,
  SkillsList
} from '@/clientComponents'
import {
  Hcard
} from '@/components/Atoms'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Nick Meincken Resume</title>
      </Head>
      <div className="bg-[#1e1e1e] text-[#e1e1e1]">
        <div className="container mx-auto resume">
          <header className="flex justify-between mb-5">
            <h2 className="text-[--brand] text-8xl">Nick Meincken <small className="block text-white">Front End Developer</small></h2>
            <Hcard />
          </header>
          <div className="intro text-xl mb-5">
            <p>
              I am an experienced AEM Front End Developer. I specialise in creating clean semantic code to ensure fast load times. I follow atomic design principles where possible and develop style guides to ensure consistent and rapid development when working as part of a team. I am as comfortable coding in raw HTML as I am using products such as React.
            </p>
            <p>
              I enjoy working as part of an Agile team and have worked on some of the countries largest e-commerce sites.
            </p>
          </div>
          <section className="grid grid-cols-12 gap-4 resume-grid">
            <aside className="col-span-2 resume-aside">
              <SkillsList />
              <h3>Qualifications</h3>
              <EducationList />
            </aside>
            <section className="col-span-10 resume-section">
              <EmploymentHistoryListResume />
            </section>
          </section>

        </div>
      </div>
    </>
  );
}
