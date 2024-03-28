import { Projects } from '@/components/Client'
import data from '@/content/works.json'

export const Works = () => {
  return (
    <div id="works" className="bg-[#ccc] top_scroll">
      <div className="mx-auto py-10 px-5 text-center">
        <h2>{data.title}</h2>
        <p className='my-5'>{data.content}</p>
        <Projects />
      </div>
    </div>
  );
}
