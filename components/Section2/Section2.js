import Image from 'next/image'
import React from 'react'
import { Container } from '../../sharedStyled'

function Section2() {
  return (
    <Container zIndex="-1" w="100vw" h="100vh" overflow="hidden" >
      <Image
        src="https://res.cloudinary.com/shekarassets/image/upload/v1657081062/wallpaperflare.com_wallpaper_szz9qm.jpg"
        alt='hero'
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </Container>
  )
}

export default Section2