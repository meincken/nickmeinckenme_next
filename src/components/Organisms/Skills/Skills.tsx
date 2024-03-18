import { SkillsList } from "@/clientComponents";

export const Skills = () => {
  return (
    <div id="skills" className="grid_container mx-auto">
      <header>
        <h2>Skills</h2>
      </header>
      <div>
        <p>
          I am a competent Front End Developer with good skills with many frameworks and content management systems. Below is my level of competency with various technologies.
        </p>
        <SkillsList />
      </div>
    </div>
  );
}
