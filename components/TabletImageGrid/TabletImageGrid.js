import Image from 'next/image';
import React from 'react';
import gallery1 from '../../public/gallery-1.jpg';
import gallery2 from '../../public/gallery-2.JPG';
import gallery3 from '../../public/gallery-3.jpg';
import gallery4 from '../../public/gallery-4.jpg';
import gallery5 from '../../public/gallery-5.jpg';
import gallery6 from '../../public/gallery-6.jpg';
import gallery8 from '../../public/gallery-8.jpg';
import gallery7 from '../../public/gallery-7.jpg';
import gallery9 from '../../public/gallery-9.jpg';
import gallery11 from '../../public/gallery-11.jpg';
import gallery14 from '../../public/gallery-14.jpg';
import gallery13 from '../../public/gallery-13.jpg';
import { FlexContainer, } from '../../sharedStyled';
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ImageGridContainer, ImageLeftGrid, Image1, Image2, Image3, Image4, Image5, Image6, Image9, Image7, ImageRightGrid } from '../ImageGrid/styled.imageGrid';

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
};

export default function TabletImageGrid() {
    const largePhonePoint = useMediaQuery('(max-width:1080px)');

    return (
        <ImageGridContainer >
            <ImageLeftGrid layout >
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
                {/* <Image4 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                >
                    <Image
                        src={gallery4}
                        objectFit="cover"
                    />
                </Image4> */}
            </ImageLeftGrid>
            {!largePhonePoint && (
                <ImageRightGrid>
                    <FlexContainer align="flex-start" gap="0.5rem" >
                        <Image4 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                        >
                            <Image
                                src={gallery11}
                                objectFit="cover"
                            />
                        </Image4>
                        <Image5 initial="hidden" animate="visible"
                            as={motion.div} variants={ImagesVariant}>
                            <Image
                                src={gallery14}
                                objectFit="cover"
                            />
                        </Image5 >
                    </FlexContainer>
                    <FlexContainer align="flex-start" gap="0.5rem" as={motion.div}  >
                        <Image7 as={motion.div} variants={ImagesVariant} initial="hidden" animate="visible"
                        >
                            <Image
                                src={gallery9}
                                objectFit="cover"
                            />
                        </Image7>
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
            )}

        </ImageGridContainer>
    );
}
