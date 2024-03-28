import { SkillsList } from "@/components/Client";
import data from '@/content/skills.json'

export const Skills = () => {
  return (
    <>
      <section id="skills" className="top_scroll bg-[#1e1e1e] text-[#e1e1e1]">
        <div className="grid_container">
          <header>
            <h2>{data.title}</h2>
          </header>
          <div>
            <p className="mb-5">
              {data.content}
            </p>
            <SkillsList />
          </div>
        </div>
      </section>
      <hr />
    </>

  );
}
