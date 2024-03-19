import head from '@/data/sitemeta.json'

export function Header() {
  return (
    <>
      <meta name="description" content={head[0].description} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/img/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" href={`/img/favicon-32x32.png`} sizes="32x32" />
      <link rel="icon" type="image/png" href={`/img/favicon-16x16.png`} sizes="16x16" />
      <link rel="mask-icon" href={`/img/safari-pinned-tab.svg`} color="#a9cc17" />

      <meta name="theme-color" content="#a9cc17" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={head[0].title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content={`/img/og-image.jpg`} />
    </>
  )
}
