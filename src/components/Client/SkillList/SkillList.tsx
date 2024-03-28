import data from '@/content/skills.json'
import { Pie } from '@/components/Atoms'
import './skillist.css'

export function SkillsList() {
  return (
    <>
      {data.skills.map((skill, x) => {
        return (
          <article key={x}>
            <h4>{skill.section}</h4>
            <div className="proskills">
              {skill.skill.map((sk, x) => {
                return (
                  <div key={x}>
                    <Pie percentage={sk.value} colour="var(--brand)" title={sk.title} />
                    {sk.subtitle && <small>{sk.subtitle} - {sk.pack}</small>}
                  </div>
                )
              })}
            </div>
          </article>
        )
      })}
    </>
  )
}
