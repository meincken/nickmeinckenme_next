import { Social } from "@/clientComponents";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-black text-[#e1e1e1] text-center p-5">
      <p><small>&copy;{year} Nick Meincken all rights reserved</small></p>
      <Social />
    </footer>
  )
}
