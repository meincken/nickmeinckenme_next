import Image from 'next/image'
import profilePic from '@/img/profilepic.webp'
import { Button } from '@/components/Atoms'
import Link from 'next/link'

export const About = () => {
  return (
    <div id="about" className="bg-[#1e1e1e] text-[#e1e1e1]">
      <div className='container mx-auto py-10 grid_container'>
        <Image
          src={profilePic}
          alt="Nick Meincken"
          placeholder="blur"
          quality={100}
          className='rounded-full mx-auto'
        />
        <div className="intro">
          <h2 className='text-left'>About Me</h2>
          <p>
            I am an experienced AEM Front End Developer. I specialise in creating clean semantic code to ensure fast load times. A champion of atomic design principles and where possible, develop style guides and pattern libraries to ensure consistent and rapid development when working as part of a team.
          </p>
          <p>
            I am as comfortable coding in raw HTML as I am using products such as React. I enjoy working as part of an Agile team and have worked on some of the countries largest e-commerce sites.
          </p>
          <div className="contact">
            <h2>Contact</h2>
            <div className='split'>
              <a href="mailto:nick@meincken.com">nick@meincken.com</a>
              <div>
                <Link className='btn' href={`resume`}>Online Resume</Link>
                <Link className='btn' href={`./NickMeinckenResume.pdf`}>Download PDF</Link>
                <Link className='btn' href={`./NickMeinckenResume.docx`}>Download DocX</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
