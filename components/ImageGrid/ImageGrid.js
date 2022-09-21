import Image from 'next/image'
import React from 'react'
import { ImageGridContainer, ImageLeftGrid, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, ImageRightGrid } from './styled.imageGrid'
import gallery1 from '../../public/gallery-1.jpg'
import gallery2 from '../../public/gallery-2.jpg'
import gallery3 from '../../public/gallery-3.jpg'
import gallery4 from '../../public/gallery-4.jpg'
import gallery5 from '../../public/gallery-5.jpg'
import gallery6 from '../../public/gallery-6.jpg'
import gallery7 from '../../public/gallery-7.jpg'
import gallery8 from '../../public/gallery-8.jpg'
import gallery9 from '../../public/gallery-9.jpg'
import gallery10 from '../../public/gallery-10.jpg'
import gallery11 from '../../public/gallery-11.jpg'
import gallery12 from '../../public/gallery-12.jpg'
import gallery13 from '../../public/gallery-13.jpg'
import gallery14 from '../../public/gallery-14.jpg'
import gallery15 from '../../public/gallery-15.jpg'
import gallery16 from '../../public/gallery-16.jpg'
import { FlexContainer, } from '../../sharedStyled'
import { motion } from "framer-motion";

const ImagesVariant = {
    hidden: {
        opacity: 0,
        x: 700
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 2, delay: 2, }
    }
}
const ImagesVariant2 = {
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

function GridImageLeft() {
    return (
        <ImageGridContainer>
            <ImageLeftGrid
                layout
            >
                <Image1 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery2}
                        objectFit="cover"
                    />
                </Image1>
                <Image2 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery5}

                        objectFit="cover"

                    />
                </Image2>
                <Image3 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery4}
                        objectFit="cover"

                    />
                </Image3>
            </ImageLeftGrid>
            <ImageRightGrid>
                <FlexContainer align="flex-start" gap="0.5rem" >
                    <Image4 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery11}
                            objectFit="cover"

                        />
                    </Image4>
                    <Image5 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery14}
                            objectFit="cover"

                        />
                    </Image5>
                </FlexContainer>
                <FlexContainer align="flex-start" gap="1rem"   >
                    <Image6 initial="hidden" animate="visible"
                        as={motion.div} variants={ImagesVariant}>
                        <Image
                            src={gallery9}
                            objectFit="cover"
                        />
                    </Image6 >
                </FlexContainer>
                <FlexContainer align="flex-start" gap="0.5rem" as={motion.div}  >
                    <Image7 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery7}
                            objectFit="cover"
                        />
                    </Image7>
                </FlexContainer>
            </ImageRightGrid>
        </ImageGridContainer>
    )
}


function GridImageRight() {
    return (
        <ImageGridContainer  >
            <FlexContainer h="100%" direction='column' justify="center" gap="0.5rem" >
                <FlexContainer gap="0.5rem" >
                    <Image8 as={motion.div} variants={ImagesVariant2} initial="hidden" viewport={{ once: true }} whileInView="visible" >
                        <Image
                            src={gallery8}
                            objectFit="cover"
                        />
                    </Image8>
                    <Image9 as={motion.div} variants={ImagesVariant2} initial="hidden" viewport={{ once: true }} whileInView="visible" >
                        <Image
                            src={gallery16}
                            objectFit="cover"
                        />
                    </Image9>
                </FlexContainer>
                <FlexContainer gap="0.5rem" >
                    <Image10 as={motion.div} variants={ImagesVariant2} initial="hidden" viewport={{ once: true }} whileInView="visible">
                        <Image
                            src={gallery6}
                            objectFit="cover"
                        />
                    </Image10>
                    <FlexContainer direction="column" gap="0.5rem" >
                        <Image11 as={motion.div} variants={ImagesVariant2} initial="hidden" viewport={{ once: true }} whileInView="visible">
                            <Image
                                src={gallery15}
                                objectFit="cover"
                            />
                        </Image11>
                        <Image12 as={motion.div} variants={ImagesVariant2} initial="hidden" viewport={{ once: true }} whileInView="visible">
                            <Image
                                src={gallery3}
                                objectFit="cover"
                            />
                        </Image12>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </ImageGridContainer>
    )
}

export { GridImageLeft, GridImageRight }