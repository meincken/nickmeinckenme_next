import data from '@/content/index.json'

export function EducationList() {
  return (
    <>
      {data.education.education.map((edu, x) => {
        return (
          <article key={x}>
            <h3>{edu.course}</h3>
            <p>
              {edu.location}
              <span> · </span>
              {edu.year}
            </p>
          </article>
        )
      })}
    </>
  )
}
