import { HeroImage } from "@/components/Atoms"
import { Social } from "@/clientComponents"
import style from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <header id='home' className="md:grid items-center md:text-white text-center px-5">
      <div className={style.jumbotron_content}>
        <h1 className="md:text-8xl text-[--brand]">
          Meincken
          <small className="block text-[45%] md:text-white">Front End Developer</small>
        </h1>
        <p className="text-2xl">I&apos;m a London based Front End Developer. I build websites and component libraries for pretty much anything.</p>
        <Social />
      </div>
      <div className={style.jumbotron_image}>
        <HeroImage />
      </div>
    </header>
  )
}
