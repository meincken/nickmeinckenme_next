import employment from '@/data/roles.json'

export function EmploymentHistoryListResume() {
  return (
    <>
      {employment.map((role, x) => {
        return (
          <section key={x} className={`mb-4 ${role.break ? 'break' : ''}`}>
            <header className='flex justify-between'>
              <h3 className='text-xl font-bold'>{role.title}</h3>
              <p>
                <strong className='block text-right'>{role.jobTitle} </strong>
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
