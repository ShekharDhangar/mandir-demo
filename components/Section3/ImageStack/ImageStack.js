import React from "react";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
import { InnerStackWrapper, StackImage, StackWrapper } from "./styled.imageStack";
import Image from "next/image";

const CARD_OFFSET = -10;
const SCALE_FACTOR = 0.1;
const SCALE_FACTOR_X = 0.03;
const itemVariant = {
    hidden: {
        x: -20,
        // opacity: 0.25,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 2,
            duration: 1,
        }
    }
}
const imageVariant = {
    hidden: {
        opacity: 0.25,
    },
    visible: {
        opacity: 1,
        // rotate: -10,
        transition: {
            staggerChildren: 0.5,
            staggerDirection: 1,
            // type: "spring",
            // bounce: 0.4,
            delay: 2,
            duration: 2.8
        }
    }
};
export default function ImageStack({ cards }) {

    return (
        <StackWrapper as={motion.div} layout >
            <InnerStackWrapper as={motion.div} layout >
                {cards.map((item, index) => {
                    const animateValues = (indexValue) => ({
                        right: indexValue * - CARD_OFFSET * 2,
                        scaleX: 1 - indexValue * SCALE_FACTOR_X,
                        scaleY: 1 - indexValue * SCALE_FACTOR,
                        zIndex: cards.length - index
                    });
                    return (
                        <StackImage as={motion.div}
                            animate={animateValues(index < 3 ? index : 3)}
                            key={index} >
                            <Image
                                src={item.url}
                                layout="responsive"
                                objectFit="cover"
                                objectPosition="center"
                                width="200"
                                height="200"
                            />
                        </StackImage>

                    );
                })}
            </InnerStackWrapper>
        </StackWrapper >
    );
};
