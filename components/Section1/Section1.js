import Image from 'next/image'
import React from 'react'
import { BgWrapper, Bg1Wrapper, PlayButtonBox } from './styled.section1'
export default function Section1() {
  return (
    <>
      <BgWrapper>
        <Image
          src="https://res.cloudinary.com/shekarassets/image/upload/v1657040972/WallpaperDog-10705096_fjlozm.jpg"
          alt='hero'
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        {/* <HeroText/> */}
      </BgWrapper>
      {/* <PlayButtonBox>
        <Button variant="outlined" sx={{fontSize:"2rem"}} startIcon={<MdPlayCircleFilled />}>
          Play
        </Button>
      </PlayButtonBox> */}
    </>
  )
}
