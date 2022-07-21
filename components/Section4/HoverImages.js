import Image from 'next/image';
import React from 'react';
import { FlexContainer } from "../../sharedStyled";
import { HoverContainer, HoverPhoto, HoverText } from './styled.imageHover';

function ImageHover() {
    return (
        <FlexContainer gap="5rem" justify="center" align="center" h="100vh">
            < HoverContainer >
                <HoverPhoto>
                    <Image
                        src="https://res.cloudinary.com/shekarassets/image/upload/v1657696641/slide-3-1_t1w6w7.jpg"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText   >
                    lorem ipsum dissum soksum kosum
                    hosum hisum ok  dissum soksum kosum
                    hosum hisum ok  dissum soksum kosum
                    hosum hisum
                </HoverText>
            </ HoverContainer>

            <HoverContainer >
                <HoverPhoto >
                    <Image
                        src="https://res.cloudinary.com/shekarassets/image/upload/v1657696641/slide-3-1_t1w6w7.jpg"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText  >
                    <p> loremipsumshekharshsh loremipsumshekharshsh loremipsumshekharshsh loremipsumshekharshsh loremipsumshekharshsh</p>
                </HoverText>
            </HoverContainer>

            <HoverContainer  >
                <HoverPhoto>
                    <Image
                        src="https://res.cloudinary.com/shekarassets/image/upload/v1657696643/slide-3-2_wxciqt.jpg"
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        width="500"
                        height="800"
                        quality={100}
                    />
                </HoverPhoto>
                <HoverText  >
                    lorem ipsum dissum soksum kosum
                    hosum hisum ok  dissum soksum kosum
                    hosum hisum ok  dissum soksum kosum
                    hosum hisum
                </HoverText>
            </HoverContainer>
        </FlexContainer >
    )
}

export default ImageHover