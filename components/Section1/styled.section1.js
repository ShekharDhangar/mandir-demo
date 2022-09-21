import styled from "styled-components";
import { Container, FlexContainer } from '../../sharedStyled'
import { media } from '../../sharedStyled/mediaQueries'
export const BgWrapper = styled.div`
    width: 100vw;
    height: 100vh;
  overflow: hidden;
  z-index: -10;
`


export const HeroTextWrapper = styled(FlexContainer)`
font-size:3rem;
color:white;
position:absolute;
top:0;
height:100vh;
${media.custom(1200)}{
  z-index:6;
}
z-index:4;
flex-direction:column;
width:100%;
justify-content:center;
align-items:start;

`

export const HeroText = styled.div`
  margin-left:5rem;
  height:max-content;
  max-width:50rem;
  word-wrap:break-word;
  white-space: break-spaces;
`
export const Button = styled.button`
  padding:1rem;
  border:none;
  color:white;
  background:transparent;
  font-size:2rem;
`

export const PlayButtonBox = styled(FlexContainer)`
    position:relative;
    font-size:6rem;
  width:100%;
  border:1px solid skyblue;
  justify-content:center;
  margin-left:5rem;
  align-items:center;
    max-width:max-content;
    color:white;
  cursor:pointer;

    `

export const VideoWrapper = styled(Container)`
      background-color:rgba(0,0,0,0.75);
      width:100%;
      position:absolute;
      z-index:15;
      top:0;
    `