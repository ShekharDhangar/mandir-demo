import Image from 'next/image'
import React from 'react'
import { ImageGridContainer, ImageLeftGrid, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, ImageRightGrid } from './styled.imageGrid'
import gallery1 from '../../public/gallery-1.webp'
import gallery2 from '../../public/gallery-2.webp'
import gallery3 from '../../public/gallery-3.webp'
import gallery4 from '../../public/gallery-4.webp'
import gallery5 from '../../public/gallery-5.webp'
import gallery6 from '../../public/gallery-6.webp'
import gallery7 from '../../public/gallery-7.webp'
import gallery8 from '../../public/gallery-8.webp'
import gallery9 from '../../public/gallery-9.webp'
import gallery10 from '../../public/gallery-10.webp'
import gallery11 from '../../public/gallery-11.webp'
import gallery12 from '../../public/gallery-12.webp'
import gallery13 from '../../public/gallery-13.webp'
import gallery14 from '../../public/gallery-14.webp'
import gallery15 from '../../public/gallery-15.webp'
import gallery16 from '../../public/gallery-16.webp'
import { FlexContainer, } from '../../sharedStyled'
import { motion } from "framer-motion";

const ImagesVariant = {
    hidden: {
        opacity: 0,
        x: 700
    },
    visible: {
        // rotate:[0,90,-90,90,0],
        opacity: 1,
        x: 0,
        // rotate: -10,
        transition: {  type: "spring", duration: 2, bounce: 0.4   }
    }
}

function ImageGrid() {
    return (
        <ImageGridContainer  >
            <ImageLeftGrid
                layout
            // initial={"offscreen"}
            //     animate={"onscreen"}
            //     as={motion.div} variants={ImagesVariant}
            // viewport={{ once: true, amount: 1 }}
            >
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
            <ImageRightGrid>
                <FlexContainer align="flex-start" gap="1rem" >
                    <Image5 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery5}
                            objectFit="cover"
                        />
                    </Image5>
                    <Image6 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery6}
                            objectFit="cover"
                        />
                    </Image6>
                    <Image7 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery7}
                            objectFit="cover"
                        />
                    </Image7>
                    <Image8 as={motion.div} variants={ImagesVariant} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    >
                        <Image
                            src={gallery8}
                            objectFit="cover"
                        />
                    </Image8>
                </FlexContainer>
                <FlexContainer align="flex-end" gap="1rem"   >
                    <Image9 initial="hidden" animate="visible"
                        as={motion.div} variants={ImagesVariant}>
                        <Image
                            src={gallery9}
                            objectFit="cover"
                        />
                    </Image9 >
                    <Image10 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >

                        <Image
                            src={gallery10}
                            objectFit="cover"
                        />
                    </Image10 >
                    <Image11 as={motion.div} variants={ImagesVariant} initial="hidden"  whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                      >
                        <Image
                            src={gallery11}
                            objectFit="cover"
                        />
                    </Image11>
                    <Image12 as={motion.div} variants={ImagesVariant} initial="hidden"  whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    >
                        <Image
                            src={gallery12}
                            objectFit="cover"
                        />
                    </Image12>
                </FlexContainer>
                <FlexContainer align="flex-end" gap="1rem" as={motion.div}  >
                    <Image13 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            src={gallery13}
                            objectFit="cover"
                        />
                    </Image13>
                    <Image14 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                    >
                        <Image
                            objectFit="cover"
                            objectPosition="center"
                            src={gallery14}
                        />
                    </Image14>
                    <Image15 as={motion.div} variants={ImagesVariant} initial="hidden"  whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                     >
                        <Image
                            src={gallery15}
                            objectFit="cover"
                        />
                    </Image15>
                    <Image16 as={motion.div} variants={ImagesVariant} initial="hidden"  whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                     >
                        <Image
                            src={gallery16}
                            objectFit="cover"
                        />
                    </Image16>
                </FlexContainer>
            </ImageRightGrid>
        </ImageGridContainer>
    )
}

export default ImageGrid