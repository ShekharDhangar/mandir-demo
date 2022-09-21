import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'
import { Container, FlexContainer } from '../../sharedStyled';
import { SingleVideoPlayer } from '../VideoPlayer';
// import { Button } from '@mui/material/Button'
import { GrClose } from 'react-icons/gr'
import { BgWrapper, PlayButtonBox, Button, HeroText, HeroTextWrapper, VideoWrapper } from './styled.section1'
export default function Section1() {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <>
      <Container w="100vw" h="100vh" >
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
        </BgWrapper>
        <FlexContainer zIndex='10' h="100vh" w="100vw" b="5px solid yellow" >
          <HeroTextWrapper>
            <HeroText>
              Welcome to Dharmakshetra!
            </HeroText>
            <PlayButtonBox onClick={() => setShowVideo(true)} >
              <MdPlayCircleFilled />
              <Button>Play</Button>
            </PlayButtonBox>
          </HeroTextWrapper>
          {showVideo && (
            <VideoWrapper>
              <SingleVideoPlayer setVideoPlayer={setShowVideo} />
            </VideoWrapper>
          )}
        </FlexContainer>
      </ Container>

    </>
  )
}
