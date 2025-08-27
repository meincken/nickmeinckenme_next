import Head from "next/head"
import Link from "next/link";
import {
  EducationList,
  EmploymentHistoryListResume,
  SkillsListResume
} from '@/components/Client'
import {
  Hcard
} from '@/components/Atoms'
import site from '@/content/config.json'
import data from '@/content/resume.json'

export default function Resume() {
  function handlePrint() {
    window.print();
  }

  return (
    <>
      <Head>
        <title>{site.sitemeta.title} | Resume</title>
      </Head>
      <div className="resume-wrap px-5">
        <header className="flex justify-center content-between hidden-print-block">
          <Link className='btn btn-group m-2' href={`/`}>Home</Link>
          <button className='btn btn-group m-2' onClick={handlePrint}>Print</button>
        </header>
        <div className="container mx-auto resume">
          <header className="md:flex justify-between mb-5">
            <h2 className="text-[--brand] md:text-8xl">{data.intro.title} <small className="block text-white">{data.intro.subtitle}</small></h2>
            <Hcard />
          </header>
          <div
             className="intro text-xl mb-5"
            dangerouslySetInnerHTML={{
              __html: data.intro.intro,
            }}
          />
          <section className="md:grid md:grid-cols-12 gap-4 resume-grid">
            <aside className="col-span-2 resume-aside">
              <SkillsListResume />
              <h3>Qualifications</h3>
              <EducationList />
            </aside>
            <section className="col-span-10 resume-section">
              <EmploymentHistoryListResume />
            </section>
          </section>
        </div>
        <footer className="resume-footer text-center hidden-print-block">
          <p>References available upon request</p>
          <p>{`\u00a92000 -  ${new Date().getFullYear()} ${site.sitemeta.title}`}</p>
        </footer>
      </div>
    </>
  );
}
