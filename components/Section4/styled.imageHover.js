import styled from "styled-components";
import { Container } from "../../sharedStyled";
import { media } from '../../sharedStyled/mediaQueries'



export const HoverContainer = styled(Container)`
    max-height:48rem;
    cursor:pointer;
    position:relative;
    max-width:30rem;
  overflow:hidden;
`

export const HoverPhoto = styled(Container)`
    position:relative;
    border-radius:7.5px;
    height:100%;
    width: 100%;
    z-index:4;
`
export const HoverText = styled(Container)`
  font-size:2rem;
  position:absolute;
  top:0;
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,.55);
  white-space: break-spaces;
  max-width:100%;
  z-index:20;
  color:white;
  ${media.custom(1200)}{
    opacity:0;
    transform:translateX(-100%);
    transition: all 0.3s ease-in-out 0s;
    ${HoverContainer}:hover & {
      opacity: 1;
      transform:translateX(0);
    }
  }
`