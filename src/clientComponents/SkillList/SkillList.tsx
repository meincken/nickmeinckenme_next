'use client'
import social from '@/data/skills.json'

export function SkillsList() {
  return (
    <>
      {social.map((skill, x) => {
        return (
          <article key={x}>
            <em>{skill.name}</em>
            <progress className='block w-full' id={skill.name} value={skill.level} max={`100`}>{skill.level}</progress>
          </article>
        )
      })}
    </>
  )
}
