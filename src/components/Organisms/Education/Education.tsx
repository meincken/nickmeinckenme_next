import { EducationList } from "@/components/Client"
import data from '@/content/index.json'

export const Education = () => {
  return (
    <>
      <div id="education" className="grid_container top_scroll">
        <header>
          <h2>{data.education.title}</h2>
        </header>
        <div>
          <EducationList />
        </div>
      </div>
      <hr />
    </>
  )
}
