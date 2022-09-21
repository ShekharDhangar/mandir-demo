// /* note:sideBar */
import styled from "styled-components"
import { Container } from "../../sharedStyled"
import { media } from "../../sharedStyled/mediaQueries"
export const Aside = styled(Container)`
  position: fixed;
  transition: opacity 0.2s linear;
  left: 0;
  top: 0;
  width: 80%;
  height: 100vh;
  z-index:100;
  ${media.custom(768)}{
    display:none;
  }
  
  transform: ${props => (props.open ? "translateX(0%)" : "translateX(-100%)")};
  transition:0.2s all ease-in-out;

`
export const SidebarDiv = styled(Container)`
  width: 100%;
  padding: 2rem;
  background-color: white;
  color: black;
  height:100%;
  position:relative;
  z-index:100;

`
export const SidebarText = styled(Container)`
    font-size:2rem;
    width:100%;
    border-bottom:1px solid grey;
    padding:1rem 0;
    margin:1rem 0;
`