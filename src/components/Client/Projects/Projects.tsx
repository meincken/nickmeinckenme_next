import data from '@/content/works.json'
import Image from 'next/image'
import './works.css'

export function Projects() {
  return (
    <div className='works'>
      {data.project.map((project, x) => {
        return (
          <article key={x}>
            <Image
              src={project.image}
              alt={project.title}
              quality={100}
              width="0"
              height="0"
              sizes="150px"
              priority={false}
            />
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
