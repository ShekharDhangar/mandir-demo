// import styled from "styled-components";
import styled from "styled-components";
import { Container, FlexContainer } from "../sharedStyled";

export const HoverPhoto = styled(Container)`
    width:30rem;
    height:max-content;
    display: block;
    height:100%;
    `
export const HoverText = styled(Container)`
    /* overflow: hidden; */
    width:30rem;
    font-size:3rem;
    /* position:absolute; */
    /* top:0; */
    /* left:0; */
    z-index: 20;
    min-height:54rem;
    background-color:red;
`
export const HoverContainer = styled(Container)`
    min-height:50rem;
    max-height:54rem;
    position:relative;

`