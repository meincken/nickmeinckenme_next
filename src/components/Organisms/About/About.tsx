import Image from 'next/image'
import profilePic from '@/img/profilepic.webp'
import Link from 'next/link'
import data from '@/data/home.json'

export const About = () => {
  return (
    <div id="about" className="bg-[#1e1e1e] text-[#e1e1e1] top_scroll">
      <div className='container py-10 grid_container'>
        <Image
          src={profilePic}
          alt={data.aboutImgAlt}
          placeholder="blur"
          quality={100}
          className='rounded-full mx-auto'
        />
        <div className="intro">
          <h2 className='text-left'>{data.aboutTitle}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutContent,
            }}
          />
          <div className="contact mt-5">
            <h2>{data.contactTitle}</h2>
            <div className='split'>
              <a href={`mailto:${data.contactMail}`}>{data.contactMail}</a>
              <div>
                <Link className='btn' href={data.links[0].url}>{data.links[0].title}</Link>
                <Link className='btn' href={data.links[1].url}>{data.links[1].title}</Link>
                <Link className='btn' href={data.links[2].url}>{data.links[2].title}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
