import social from '@/data/social.json'
import { Icons } from '@/components/Atoms'

export function Social() {
  return (
    <div className='flex justify-center py-5'>
      {social.map((socialItem, x) => {
        return (
          <a key={x} href={socialItem.url} className='text-[#a9cc17] px-2' target='_blank' rel='noopener noreferrer'>
            <svg className="icon h-8 w-8">
              <use xlinkHref={`#${socialItem.name.toLowerCase()}`}></use>
            </svg>
            <span className='sr-only'>{socialItem.name}</span>
          </a>
        )
      })}
      <Icons />
    </div>
  )
}

