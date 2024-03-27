import data from '@/content/config.json'
import './Nav.css'

export function Nav() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: 'start' });
  }

  return (
    <ul>
      {data.navigation.map((navItem, x) => {
        return (
          <li key={x}>
            <div onClick={() => scrolltoHash(`${navItem.item.toLowerCase()}`)}>
              {navItem.item}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
