import employment from '@/data/roles.json'

export function EmploymentHistoryList() {
  return (
    <>
      {employment.map((role, x) => {
        return (
          <section key={x} className='mb-5'>
            <header className='flex justify-between mb-2'>
              <h3 className='text-xl font-bold'>{role.title}</h3>
              <p className='text-right'>
                <strong className='block'>{role.jobTitle} </strong>
                {role.startDate} -  {role.finishDate}
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
