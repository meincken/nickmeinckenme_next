import data from '@/data/navigation.json'
import Link from 'next/link'

export function Nav() {
  return (
    <ul className='flex py-1'>
      {data.map((navItem, x) => {
        return (
          <li key={x}>
            <Link className='block m-5' href={`#${navItem.item.toLowerCase()}`}>
              {navItem.item}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
