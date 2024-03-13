import Image from 'next/image'
import profilePic from '@/img/header-background.jpg'

export const HeroImage = () => {
  return (
    <Image
      src={profilePic}
      alt="Just a test"
      placeholder="blur"
      quality={100}
      sizes="100vw"
      style={{
        objectFit: 'cover',
        gridArea: '1/1',
        maxHeight: '100vh'
      }}
    />
  )
}
