import data from '@/content/config.json'

export const Hcard = () => {
  return (
    <div id={`hcard-${data.hCard.full_name.replace(/[\s_]+/g, '-')}`} className="vcard md:text-right">
      <a className="url fn n block" href={data.hCard.url}>
        <span className="family-name">{data.hCard.url_title}</span>
      </a>
      <a className="url block" href={data.hCard.github_url}>Github</a>
      <a className="email" href={`mailto:${data.hCard.email}`}>{data.hCard.email}</a>
      <div className="adr">
        <span className="locality">{data.hCard.locality}</span>,
        <span className="region country-name"> {data.hCard.country_name}</span>
      </div>
      <a className="tel" href={`tel:${data.hCard.phone}`}>{data.hCard.phone}</a>
    </div>
  )
}
