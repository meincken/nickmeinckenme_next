import employment from '@/data/roles.json'
import './EmploymentHistoryList.css'

export function EmploymentHistoryList() {
  return (
    <>
      {employment.map((role, x) => {
        return (
          <section key={x} className='employment'>
            <header className=''>
              <h3>{role.title}</h3>
              <p>
                <strong>{role.jobTitle} </strong>
                {role.startDate} - {role.finishDate}
              </p>
            </header>
            <article>
              <p>{role.description}</p>
            </article>
          </section>
        )
      })}
    </>
  )
}
