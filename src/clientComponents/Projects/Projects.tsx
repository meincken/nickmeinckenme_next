'use client'
import projects from '@/data/home.json'
import Image from 'next/image'
import './works.css'

export function Projects() {
  return (
    <div className='works'>
      {projects.projects.map((project, x) => {
        return (
          <article key={x}>
            <Image
              src={project.image}
              alt={project.title}
              quality={100}
              width="0"
              height="0"
              sizes="150px"
              className="w-24 h-auto"
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
