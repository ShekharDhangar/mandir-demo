import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Container } from "../sharedStyled";
import { Image1 } from "../components/ImageGrid/styled.imageGrid";
import Image from "next/image";
import gallery1 from '../public/gallery-1.jpg';
import gallery2 from '../public/gallery-2.JPG';
import gallery3 from '../public/gallery-3.jpg';
import gallery4 from '../public/gallery-4.jpg';
import gallery5 from '../public/gallery-5.jpg';
import gallery6 from '../public/gallery-6.jpg';
import gallery7 from '../public/gallery-7.jpg';
import gallery8 from '../public/gallery-8.jpg';
import gallery9 from '../public/gallery-9.jpg';
import gallery10 from '../public/gallery-10.jpg';
import gallery11 from '../public/gallery-11.jpg';
import gallery12 from '../public/gallery-12.JPG';
import styled from "styled-components";

const sliderImageData = [
    {
        id: 1,
        url: gallery1,
    },

    {
        id: 3,
        url: gallery3,
    },
    {
        id: 4,
        url: gallery4,
    },
    {
        id: 5,
        url: gallery5,
    },
    {
        id: 7,
        url: gallery7,
    },
    {
        id: 8,
        url: gallery8,
    },
    {
        id: 9,
        url: gallery9,
    }
];

const SliderImageContainer = styled(Container)`
    width:40rem;
    height:100%;
`;


export default function App() {
    return (
        <>
            <Container b="1px solid red" h="30rem" w="100%" >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={80}
                    slidesPerGroup={1}
                    loop={true}
                    centeredSlides={true}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {sliderImageData.map(image => {
                        return (
                            <SwiperSlide key={image.id} >
                                <SliderImageContainer>
                                    <Image
                                        src={image.url}
                                        objectFit="cover"
                                        objectPosition="center"
                                        width="400"
                                        height="300" />
                                </SliderImageContainer>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </>
    );
}