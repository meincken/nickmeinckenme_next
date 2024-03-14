'use client'
import social from '@/data/skills.json'

export function SkillsList() {
  return (
    <div>
      <p>I am a competent Front End Developer with good skills with many frameworks and content management systems. Below is my level of competency with various technologies.</p>
      {social.map((skill, x) => {
        return (
          <article key={x}>
            <em>{skill.name}</em>
            <progress className='block' id={skill.name} value={skill.level} max={`100`}>{skill.level}</progress>
          </article>
        )
      })}
    </div>
  )
}
