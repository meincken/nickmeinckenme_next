import Image from 'next/image'
import profilePic from '@/img/profilepic.webp'
import Link from 'next/link'
import data from '@/content/index.json'

export const About = () => {
  return (
    <div id="about" className="bg-[#1e1e1e] text-[#e1e1e1] top_scroll">
      <div className='container py-10 grid_container'>
        <Image
          src={profilePic}
          alt={data.about.alt}
          placeholder="blur"
          quality={100}
          className='rounded-full mx-auto'
        />
        <div className="intro">
          <h2>{data.about.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.about.content,
            }}
          />
          <div className="contact mt-5">
            <h2>{data.contact.title}</h2>
            <div className='split'>
              <a href={`mailto:${data.contact.mail}`}>{data.contact.mail}</a>
              <div>
                <Link className='btn' href={data.contact.button[0].url}>{data.contact.button[0].title}</Link>
                <Link className='btn' href={data.contact.button[1].url}>{data.contact.button[1].title}</Link>
                <Link className='btn' href={data.contact.button[2].url}>{data.contact.button[2].title}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
