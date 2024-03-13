import data from '@/data/navigation.json'

export function Nav() {
  return (
    <ul className='flex py-1'>
      {data.map((navItem, x) => {
        return (
          <li key={x}>
            <a className='block m-5' href={`#${navItem.item.toLowerCase()}`}>
              {navItem.item}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
