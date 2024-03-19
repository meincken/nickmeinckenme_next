import proskills from '@/data/proskill.json'
import './skills.css'

export function SkillsListResume() {
  return (
    <>
      {proskills.map((skill, x) => {
        return (
          <article key={x}>
            <h6>{skill.section}</h6>
            {skill.skills.map((sk, x) => {
              return (
                <span key={x} className='block mb-2'>
                  {sk.skilltitle} - {sk.length} years
                  {sk.title && <small>{sk.title} - {sk.pack}</small>}
                  <progress className='block progress w-full' id={sk.skilltitle} value={sk.value} max={`100`}>
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
