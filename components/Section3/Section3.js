import Image from 'next/image'
import React from 'react'
import { Container, FlexContainer } from '../../sharedStyled'
import Section3Comp from './Section3comp'

function Section3() {
    return (
        <Container position="relative" overflow="hidden" w="100vw" h="100vh" >
            <Image
                src="https://res.cloudinary.com/shekarassets/image/upload/v1657040972/WallpaperDog-10705096_fjlozm.jpg"
                alt='hero'
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
            />
            <FlexContainer h="100%" w="100%" justify="center" align="center" position="relative" >
                <Section3Comp />
            </FlexContainer>
        </Container>
    )
}

export default Section3