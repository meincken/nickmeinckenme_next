'use client'
import social from '@/data/education.json'

export function EducationList() {
  return (
    <>
      {social.map((edu, x) => {
        return (
          <article key={x}>
            <h3>{edu.course}</h3>
            <p>
              {edu.site}
              <span> · </span>
              {edu.year}
            </p>
        </article>
        )
      })}
    </>
  )
}
