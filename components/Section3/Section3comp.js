import React from 'react'
import { FlexContainer } from '../../sharedStyled';
import Accordion from './Accordion/Accordion';
import ImageStack from './ImageStack/ImageStack';
const ImageStackArr = [
    {
        url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103114/siby-QXIBCvvA_jc-unsplash_dtqwzb.jpg",
        // variant: {
        //     hidden: {
        //         x: -5,
        //     },
        //     visible: {
        //         opacity: 1,
        //         x: 0,
        //         transition: { duration: 2, delay: 10 },
        //     },
        // },
    },
    {
        url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103106/varun-pyasi-AZ4y6Bc3qeI-unsplash_eeqe0u.jpg",
        // variant: {
        //     hidden: {
        //         x: -2,
        //     },
        //     visible: {
        //         opacity: 1,
        //         x: 0,
        //         transition: { duration: 2, delay: 7 },
        //     },
        // },
    },
    {
        url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103097/sk-fY-ArEvk7sc-unsplash_a0rsvz.jpg",
        // variant: {
        //     hidden: {
        //         x: -2,
        //     },
        //     visible: {
        //         opacity: 1,
        //         x: 0,
        //         transition: { duration: 2, delay: 0.15 },
        //     },
        // }
    }
]
// const ImageStackArr = ["https://res.cloudinary.com/shekarassets/image/upload/v1657103114/siby-QXIBCvvA_jc-unsplash_dtqwzb.jpg", "https://res.cloudinary.com/shekarassets/image/upload/v1657103106/varun-pyasi-AZ4y6Bc3qeI-unsplash_eeqe0u.jpg", "https://res.cloudinary.com/shekarassets/image/upload/v1657103097/sk-fY-ArEvk7sc-unsplash_a0rsvz.jpg"];

function Section3Comp() {
    const [cards, setCards] = React.useState(ImageStackArr);
    const moveToEnd = (revealImage) => {
        const cardsClone = ImageStackArr.slice();
        const selectedImage = cardsClone.splice(revealImage, 1);
        const removedItem = cardsClone.splice(0, 1);
        setCards([...selectedImage, ...cardsClone, ...removedItem]);
    };
    return (
        <FlexContainer gap='2rem' align="center" justify="center" w="100vw" h="100vh" zIndex="10" >
            {/* <Text text="I checked in for the night at Out O The Way motel. What a bad choice that was. First I took a shower and a spider crawled out of the drain. Next, the towel rack fell down when I reached for the one small bath towel. This briefs filled my brain. I jumped out of the bed, threw my " maxW="30rem" b="2px solid black" /> */}
            <ImageStack cards={cards} />
            <Accordion nextFunction={moveToEnd} />
        </FlexContainer>
    )
}

export default Section3Comp