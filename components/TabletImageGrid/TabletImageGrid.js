import Image from 'next/image'
import React from 'react'
import gallery1 from '../../public/gallery-1.webp'
import gallery2 from '../../public/gallery-2.webp'
import gallery3 from '../../public/gallery-3.webp'
import gallery4 from '../../public/gallery-4.webp'
import gallery5 from '../../public/gallery-5.webp'
import gallery6 from '../../public/gallery-6.webp'
import gallery8 from '../../public/gallery-8.webp'
import gallery9 from '../../public/gallery-9.webp'
import gallery13 from '../../public/gallery-13.webp'
import { FlexContainer, } from '../../sharedStyled'
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ImageGridContainer, ImageLeftGrid, Image1, Image2, Image3, Image4, Image5, Image6, Image9, Image13, ImageRightGrid } from './styled.tabletImageGrid'

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

export default function TabletImageGrid() {
    const largePhonePoint = useMediaQuery('(max-width:768px)');

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
            {!largePhonePoint && (
                <ImageRightGrid>
                    <FlexContainer align="flex-start" gap="1rem" >
                        <Image5 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                        >
                            <Image
                                src={gallery8}
                                objectFit="cover"
                            />
                        </Image5>
                    </FlexContainer>
                    <FlexContainer align="flex-end" gap="1rem"   >
                        <Image9 initial="hidden" animate="visible"
                            as={motion.div} variants={ImagesVariant}>
                            <Image
                                src={gallery8}
                                objectFit="cover"
                            />
                        </Image9 >
                    </FlexContainer>
                    <FlexContainer align="flex-end" gap="1rem" as={motion.div}  >
                        <Image13 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                        >
                            <Image
                                src={gallery8}
                                objectFit="cover"
                            />
                        </Image13>
                    </FlexContainer>
                </ImageRightGrid>
            )}

        </ImageGridContainer>
    )
}
