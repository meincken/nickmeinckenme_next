import { Nav } from "@/components/Client"

export const Navigation = () => {
  return (
    <nav className="fixed w-full top-0 bg-black text-white hidden md:flex content-center justify-center z-10">
      <Nav />
    </nav>
  )
}
