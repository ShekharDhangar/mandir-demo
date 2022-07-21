// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Container, FlexContainer } from '../sharedStyled';
// import { HoverContainer, HoverPhoto, HoverText } from '../styles/styled.demo';
// const textVariants = {
//   beforeHover: {
//     x: -50,
//     opacity: 0.3, transition: {
//       staggerChildren: 0.1,
//       staggerDirection: -1
//     }
//   },
//   onHover: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       staggerChildren: 0.1,
//       staggerDirection: 1
//     }
//   }
// };

// function Demo() {
//   return (
//     <FlexContainer gap="5rem" justify="center" align="center" h="100vh" >
//       <HoverContainer initial="beforeHover"
//         whileHover="onHover" >
//         <HoverPhoto>
//           <Image
//             src="https://res.cloudinary.com/shekarassets/image/upload/v1657696641/slide-3-1_t1w6w7.jpg"
//             layout="responsive"
//             objectFit="cover"
//             objectPosition="center"
//             width="500"
//             height="800"
//             quality={100}
//           />
//         </HoverPhoto>
//         <HoverText initial="beforeHover"
//           whileHover="onHover"
//           variants={textVariants}   >
//           lorem ipsum dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum
//         </HoverText>
//       </HoverContainer>

//       <HoverContainer >
//         <HoverPhoto initial="beforeHover"
//           whileHover="onHover">
//           <Image
//             src="https://res.cloudinary.com/shekarassets/image/upload/v1657696641/slide-3-1_t1w6w7.jpg"
//             layout="responsive"
//             objectFit="cover"
//             objectPosition="center"
//             width="500"
//             height="800"
//             quality={100}
//           />
//         </HoverPhoto>
//         <HoverText initial="beforeHover"
//           whileHover="onHover"
//           variants={textVariants}   >
//           lorem ipsum dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum
//         </HoverText>
//       </HoverContainer>

//       <HoverContainer initial="beforeHover"
//         whileHover="onHover" >
//         <HoverPhoto>
//           <Image
//             src="https://res.cloudinary.com/shekarassets/image/upload/v1657696643/slide-3-2_wxciqt.jpg"
//             layout="responsive"
//             objectFit="cover"
//             objectPosition="center"
//             width="500"
//             height="800"
//             quality={100}
//           />
//         </HoverPhoto>
//         <HoverText initial="beforeHover"
//           whileHover="onHover"
//           variants={textVariants}   >
//           lorem ipsum dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum ok  dissum soksum kosum
//           hosum hisum
//         </HoverText>
//       </HoverContainer>
//     </FlexContainer>
//   )
// }

// export default Demo