import { SkillsList } from "@/clientComponents";
import data from '@/data/home.json'

export const Skills = () => {
  return (
    <>
      <section id="skills" className="top_scroll bg-[#1e1e1e] text-[#e1e1e1]">
        <div className="grid_container">
          <header>
            <h2>{data.skillsTitle}</h2>
          </header>
          <div>
            <p className="mb-5">
              {data.skillsContent}
            </p>
            <SkillsList />
          </div>
        </div>
      </section>
      <hr />
    </>

  );
}
