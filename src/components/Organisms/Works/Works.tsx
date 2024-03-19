import { Projects } from '@/clientComponents/'

export const Works = () => {
  return (
    <div id="works" className="bg-[#ccc] top_scroll">
      <div className="mx-auto py-10 text-center">
        <h2>Works</h2>
        <p className='my-5'>Check out some of my previous projects</p>
        <Projects />
      </div>
    </div>
  );
}
