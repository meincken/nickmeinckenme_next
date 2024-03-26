import employment from '@/data/roles.json'
import './EmploymentHistoryListResume.css'

export function EmploymentHistoryListResume() {
  return (
    <>
      {employment.map((role, x) => {
        return (
          <section key={x} className={`employment-resume ${role.break ? 'break' : ''}`}>
            <header>
              <h3>{role.title}</h3>
              <p>
                <strong>{role.jobTitle} </strong>
                {role.startDate} - {role.finishDate}
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
          </section>
        )
      })}
    </>
  )
}
