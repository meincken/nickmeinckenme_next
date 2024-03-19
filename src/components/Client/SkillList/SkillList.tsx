import proskills from '@/data/proskill.json'
import { Pie } from '@/components/Atoms'
import './skillist.css'

export function SkillsList() {
  return (
    <>
      {proskills.map((skill, x) => {
        return (
          <article key={x}>
            <h4>{skill.section}</h4>
            <div className="grid md:grid-cols-4 gap-1.5">
              {skill.skills.map((sk, x) => {
                return (
                  <div key={x}>
                    <Pie percentage={sk.value} colour="var(--brand)" title={sk.skilltitle} />
                    {sk.title && <small>{sk.title} - {sk.pack}</small>}
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
