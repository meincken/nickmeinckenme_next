import data from '@/content/config.json'
import { Icons } from '@/components/Atoms'
import styles from './Social.module.css'

export function Social() {
  return (
    <div className={styles.social}>
      {data.social.map((socialItem, x) => {
        return (
          <a key={x} href={socialItem.url} target='_blank' rel='noopener noreferrer'>
            <svg>
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

