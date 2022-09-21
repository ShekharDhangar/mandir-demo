import styled from "styled-components";
import { FlexContainer, Container } from "../../sharedStyled";

export const SlideItem = styled(Container)`
 padding: 10px 0;
      min-width: 308px;
   
      color: #fff;
      font-size: 50px;
      text-align: center;
      // background-color: #0a9e88;
      margin-left: 10px;
      transition: all .1s ease;
`
export const SlideList = styled(Container)`
 width: 90%;
    padding: 5px;
    display: block;
   

`
export const ImageBox = styled(Container)`
overflow: hidden;
   
    align-items: flex-end;
    -webkit-box-pack: center;
    justify-content: center;
`
export const SlideImageContainer = styled(FlexContainer)`
/* flex-direction:column; */
/* display: flex; */
/* align-items:center; */
/* justify-content:center; */
width:100%;

` 
