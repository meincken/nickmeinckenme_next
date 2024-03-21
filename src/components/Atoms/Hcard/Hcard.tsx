export const Hcard = () => {
  return (
    <div id="hcard-Nicholas-James-Meincken" className="vcard md:text-right">
      <a className="url fn n block" href="https://nickmeincken.me">
        <span className="family-name">Meincken</span>
      </a>
      <a className="url block" href="https://github.com/meincken">Github</a>
      <a className="email" href="mailto:nick@meincken.com">nick@meincken.com</a>
      <div className="adr">
        <span className="locality">Surbiton</span>,
        <span className="region country-name"> Surrey UK</span>
      </div>
      <a className="tel" href="tel::07967961441">07967961441</a>
    </div>
  )
}
