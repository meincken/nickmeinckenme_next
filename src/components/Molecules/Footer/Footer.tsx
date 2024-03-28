import { Social } from "@/components/Client";
import data from '@/content/config.json'
import './Footer.css'

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`footer`}>
      <p><small>&copy;{year} {data.sitemeta.title} all rights reserved</small></p>
      <Social />
    </footer>
  )
}
