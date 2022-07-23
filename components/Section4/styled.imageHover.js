import styled from "styled-components";
import { Container } from "../../sharedStyled";

export const HoverText = styled.div`
    font-size:2rem;
    /* word-wrap: break-word; */
  display: flex;
  max-width:20rem;
  border:2px solid red;
  justify-content: space-around;
  flex-grow: 1;
  position:relative;
`

export const HoverContainer = styled(Container)`
    height:100%;
    max-height:48rem;
    position:relative;
    border-radius:7.5px;
`

export const HoverPhoto = styled(Container)`
    position:relative;
    height:100%;
    width: 100%;
    cursor: pointer;
    z-index:5;
    max-width:30rem;
`
