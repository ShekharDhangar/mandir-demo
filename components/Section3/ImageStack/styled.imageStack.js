import styled from "styled-components";
import { Container, FlexContainer } from "../../../sharedStyled";
export const StackWrapper = styled(FlexContainer)`
     position: relative;
     align-items: center;
     justify-content: center;

`
export const InnerStackWrapper = styled(FlexContainer)`
     position: relative;
     width:35rem;
     height:35rem;
`

export const StackImage = styled(Container)`
     position:absolute;
     width:35rem;
     /* height:35rem; */
     border-radius:5px;
    transform-origin: 50% 50% 0px;
    list-style:none;
`