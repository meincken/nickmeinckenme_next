import { SkillsList } from "@/clientComponents";

export const Skills = () => {
  return (
    <section id="skills" className="top_scroll bg-[#1e1e1e] text-[#e1e1e1]">
      <div className="grid_container">
        <header>
          <h2>Skills</h2>
        </header>
        <div>
          <p className="mb-5">
            I am a competent Front End Developer with good skills with many frameworks and content management systems. Below is my level of competency with various technologies.
          </p>
          <SkillsList />
        </div>
      </div>

    </section>
  );
}
