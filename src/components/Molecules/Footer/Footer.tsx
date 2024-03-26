import { Social } from "@/components/Client";
import './Footer.css'

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`footer`}>
      <p><small>&copy;{year} Nick Meincken all rights reserved</small></p>
      <Social />
    </footer>
  )
}
