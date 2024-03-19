import { HeroImage } from "@/components/Atoms"
import { Social } from "@/components/Client"
import style from './Jumbotron.module.css'
import data from '@/data/home.json'

export const Jumbotron = () => {
  return (
    <header id='home' className="md:grid items-center md:text-white text-center">
      <div className={style.jumbotron_content}>
        <h1 className="md:text-8xl text-[--brand]">
          <span>{data.title}</span>
          <small className="block text-[45%] md:text-white">{data.subtitle}</small>
        </h1>
        <p
            className="text-2xl"
          dangerouslySetInnerHTML={{
            __html: data.intro,
          }}
        />
        <Social />
      </div>
      <div className={style.jumbotron_image}>
        <HeroImage />
      </div>
    </header>
  )
}
