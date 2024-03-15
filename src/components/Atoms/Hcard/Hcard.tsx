export const Hcard = () => {
  return (
    <div id="hcard-Nicholas-James-Meincken" className="vcard text-right">
      <a className="url fn n block" href="https://nickmeincken.me">
        <span className="given-name">Nicholas</span>
        <span className="additional-name">James</span>
        <span className="family-name">Meincken</span>
      </a>
      <a className="url block" href="https://github.com/meincken">Github</a>
      <a className="email" href="mailto:nick@meincken.com">nick@meincken.com</a>
      <div className="adr">
        <div className="street-address">39 Villiers Avenue</div>
        <span className="locality">Surbiton</span>,
        <span className="region">Surrey</span>,
        <span className="postal-code">KT5 8BB</span>
        <span className="country-name">United Kingdom</span>
      </div>
      <div className="tel">07967961441</div>
    </div>
  )
}
