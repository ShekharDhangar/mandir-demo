import Image from 'next/image'
import React from 'react'
import gallery1 from '../../public/gallery-1.jpg'
import gallery2 from '../../public/gallery-2.jpg'
import gallery3 from '../../public/gallery-3.jpg'
import gallery4 from '../../public/gallery-4.jpg'
import { FlexContainer, } from '../../sharedStyled'
import { motion } from "framer-motion";
import styled from 'styled-components'
// import { ImageGridContainer, ImageLeftGrid, Image1, Image2, Image3, Image4, Image5, Image6, Image9, Image13, ImageRightGrid } from './styled.tabletImageGrid'

export const ImageGridContainer = styled(FlexContainer)`
    width: 100%;
    align-items:center;
    height:100%;

`
export const Image1 = styled.div`
    height: 8.9rem;
    width:11.75rem;
`
export const Image2 = styled.div`
    height:16.3rem;
    width:17rem;
`

export const Image3 = styled.div`
    height:14.5rem;
    width:28rem;
`

export const Image4 = styled.div`
    height:12.7rem;
    width:19rem;
`
export const ImageLeftGrid = styled(FlexContainer)`
    flex-direction:column;
    gap:0.5rem;
    justify-content:center;
    align-items:flex-end;
`

const ImagesVariant = {
    hidden: {
        opacity: 0,
        x: 700
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 2, }
    }
}

export default function LargePhoneGrid() {
    return (
        <ImageGridContainer  >
            <ImageLeftGrid layout >
                <Image1 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"

                >
                    <Image
                        src={gallery1}
                        objectFit="cover"
                    />
                </Image1>
                <Image2 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery2}
                        objectFit="cover"
                    />
                </Image2>
                <Image3 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery3}
                        objectFit="cover"
                    />
                </Image3>
                <Image4 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery4}
                        objectFit="cover"
                    />
                </Image4>
            </ImageLeftGrid>
        </ImageGridContainer>
    )
}
