'use client'
import data from '@/data/home.json'

export function EducationList() {
  return (
    <>
      {data.education.map((edu, x) => {
        return (
          <article key={x}>
            <h3 className='text-xl font-bold'>{edu.course}</h3>
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
