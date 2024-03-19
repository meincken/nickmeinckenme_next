import { EducationList } from "@/clientComponents"
import data from '@/data/home.json'

export const Education = () => {
  return (
    <>
      <div id="education" className="grid_container top_scroll">
        <header>
          <h2>{data.educationTitle}</h2>
        </header>
        <div>
          <EducationList />
        </div>
      </div>
      <hr />
    </>
  )
}
