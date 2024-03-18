import data from '@/data/navigation.json'

export function Nav() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: 'start' });
  }

  return (
    <ul className='flex py-1'>
      {data.map((navItem, x) => {
        return (
          <li key={x}>
            <div className='block m-5 cursor-pointer' onClick={() => scrolltoHash(`${navItem.item.toLowerCase()}`)}>
              {navItem.item}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
