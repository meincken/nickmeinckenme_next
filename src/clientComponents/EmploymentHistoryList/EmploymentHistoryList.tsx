'use client'
import employment from '@/data/roles.json'

export function EmploymentHistoryList() {
  return (
    <>
      {employment.map((role, x) => {
        return (
          <article key={x} className='mb-4'>
            <header>
              <h3 className='text-xl font-bold'>{role.title}</h3>
              <p>
                <strong>{role.jobTitle} </strong>
                {role.startDate} -  {role.finishDate}
              </p>
            </header>
            <article>
              <p>{role.description}</p>
            </article>
            <footer>
              <strong>Relevent skills: </strong>
              {role.tags.map((tag, x) => {
                return (
                  <span key={x}>{tag}</span>
                )
              })}
            </footer>
          </article>
        )
      })}
    </>
  )
}