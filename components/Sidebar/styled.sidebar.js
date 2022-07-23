// /* note:sideBar */
import styled from "styled-components"
import { Container } from "../../sharedStyled"

export const Aside = styled(Container)`
  position: fixed;
  transition: opacity 0.2s linear;
  left: 0;
  top: 0;
  width: 80%;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.2); */
`
export const SidebarDiv = styled(Container)`
  width: 100%;
  padding: 2rem;
  background-color: white;
  color: black;
  height:100%;
`
export const SidebarText = styled(Container)`
    font-size:2rem;
    width:100%;
    border-bottom:1px solid grey;
    padding:1rem 0;
    margin:1rem 0;
`