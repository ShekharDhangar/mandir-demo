import Image from 'next/image';
import React from 'react';
import gallery1 from '../../public/gallery-1.jpg';
import gallery2 from '../../public/gallery-2.JPG';
import gallery3 from '../../public/gallery-3.jpg';
import gallery4 from '../../public/gallery-4.jpg';
import gallery5 from '../../public/gallery-5.jpg';
import gallery6 from '../../public/gallery-6.jpg';
import gallery7 from '../../public/gallery-7.jpg';
import gallery8 from '../../public/gallery-8.jpg';
import gallery9 from '../../public/gallery-9.jpg';
import gallery10 from '../../public/gallery-10.jpg';
import { Container, FlexContainer } from "../../sharedStyled";
import { HoverContainer, HoverPhoto, HoverText } from './styled.imageHover';
import { motion } from 'framer-motion';
const hoverVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
};
function ImageHover() {
    return (
        <FlexContainer viewport={{ once: true }} as={motion.div} variants={hoverVariants} initial="hidden" whileInView="visible" mt='5rem' gap="5rem" justify="center" align="center" h="100vh">
            <HoverContainer variants={itemVariants} as={motion.div}   >
                <HoverPhoto>
                    <Image
                        src={gallery2}
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText  >
                    LOVE ALL SERVE ALL
                    HELP EVER HURT NEVER
                </HoverText>
            </ HoverContainer>

            <HoverContainer variants={itemVariants} as={motion.div}   >
                <HoverPhoto   >
                    <Image
                        src={gallery6}
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText  >
                    LOVE ALL SERVE ALL
                    HELP EVER HURT NEVER
                </HoverText>
            </ HoverContainer>

            <HoverContainer variants={itemVariants} as={motion.div}   >
                <HoverPhoto   >
                    <Image
                        src={gallery8}
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText  >
                    LOVE ALL SERVE ALL
                    HELP EVER HURT NEVER
                </HoverText>
            </ HoverContainer>


        </FlexContainer >
    );
}

export default ImageHover;