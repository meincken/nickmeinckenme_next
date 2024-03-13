import { HeroImage } from "@/components/Atoms"
import style from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <header className="grid items-center text-white text-center">
      <div className={style.jumbotron_content}>
        <h1>
          Meincken
          <small className="block">Front End Developer</small>
        </h1>
        <p>I&apos;m a London based Front End Developer. I build websites and component libraries for pretty much anything.</p>
      </div>
      <HeroImage />
    </header>
  )
}
