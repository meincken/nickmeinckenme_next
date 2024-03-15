'use client'
import projects from '@/data/projects.json'

export function Projects() {
  return (
    <>
      {projects.map((project, x) => {
        return (
          <article key={x}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        )
      })}
    </>
  )
}
