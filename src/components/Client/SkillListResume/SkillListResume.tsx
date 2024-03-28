import data from '@/content/skills.json'
import './skills.css'

export function SkillsListResume() {
  return (
    <>
      {data.skills.map((skill, x) => {
        return (
          <article key={x} className='skills'>
            <h6>{skill.section}</h6>
            {skill.skill.map((sk, x) => {
              return (
                <span key={x}>
                  {sk.title} - {sk.length} years
                  {sk.subtitle && <small>{sk.subtitle} - {sk.pack}</small>}
                  <progress id={sk.subtitle} value={sk.value} max={`100`}>
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
