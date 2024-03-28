import employment from '@/content/roles.json'
import './EmploymentHistoryList.css'

export function EmploymentHistoryList() {
  return (
    <>
      {employment.role.map((role, x) => {
        return (
          <section key={x} className='employment'>
            <header>
              <h3>{role.company}</h3>
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
