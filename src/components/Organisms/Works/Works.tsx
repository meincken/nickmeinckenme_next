import { Projects } from '@/clientComponents/'
import data from '@/data/home.json'

export const Works = () => {
  return (
    <div id="works" className="bg-[#ccc] top_scroll">
      <div className="mx-auto py-10 px-5 text-center">
        <h2>{data.worksTitle}</h2>
        <p className='my-5'>{data.worksContent}</p>
        <Projects />
      </div>
    </div>
  );
}
