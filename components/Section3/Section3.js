import Image from 'next/image'
import React from 'react'
import { Container } from '../../sharedStyled'
import Section3Comp from './Section3Comp'

function Section3() {
    return (
        <Container zIndex="-10" overflow="hidden" w="100vw" h="100vh" >
            <Image
                src="https://res.cloudinary.com/shekarassets/image/upload/v1657040972/WallpaperDog-10705096_fjlozm.jpg"
                alt='hero'
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
            />
            <Section3Comp />
        </Container>
    )
}

export default Section3