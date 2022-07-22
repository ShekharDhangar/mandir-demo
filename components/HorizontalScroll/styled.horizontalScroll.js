import styled from "styled-components";
import { Container, FlexContainer } from "../../sharedStyled";

export const HorizontalWrapper = styled(Container)`
  overflow-y:scroll;
  overflow-x:hidden;
  transform: rotate(270deg) translateX(-100%);
  transform-origin: top left;
  scroll-snap-type:y mandatory;
  top:0;
  width:100vh;
  height:100vw;
`

export const HorizontalInnerWrapper = styled(Container)`
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  white-space:nowrap;
  font-size:0;
  position:sticky;
`

export const Page = styled(Container)`
  scroll-snap-align:center;
  width:100vw;
  height:100vh;
  display:inline-block;
  position:relative;
  `



export const ImageGridOuter = styled(FlexContainer)`
  justify-content:center;
  position:absolute;
  top:10%;
  transform: translateX(50%);
  height:100vh;
  z-index:1;
  align-items:start;
  /* border:3px solid red; */
`