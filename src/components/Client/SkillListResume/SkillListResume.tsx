import proskills from '@/data/proskill.json'
import './skills.css'

export function SkillsListResume() {
  return (
    <>
      {proskills.map((skill, x) => {
        return (
          <article key={x} className='skills'>
            <h6>{skill.section}</h6>
            {skill.skills.map((sk, x) => {
              return (
                <span key={x}>
                  {sk.skilltitle} - {sk.length} years
                  {sk.title && <small>{sk.title} - {sk.pack}</small>}
                  <progress id={sk.skilltitle} value={sk.value} max={`100`}>
                    {sk.value}
                  </progress>
                </span>
              )
            })}
          </article>
        )
      })}
    </>
  )
}
