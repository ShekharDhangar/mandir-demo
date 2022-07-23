import Image from 'next/image'
import React from 'react'
import { Container } from '../../sharedStyled'
import { Bg2Wrapper } from './styled.section2'

function Section2() {
  return (
    <Container zIndex="-1">
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