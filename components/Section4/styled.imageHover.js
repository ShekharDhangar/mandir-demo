import styled from "styled-components";
import { Container } from "../../sharedStyled";

export const HoverText = styled(Container)`
    font-size:2.5rem;
    width:30rem;
    padding:  1rem; 
    height:100%;
    cursor: pointer;
    color:white;
    background-color:rgba(0,0,0,0.5);;
    z-index: 20;
    position:relative;
    opacity: 0;
    transform: translateX(-100%);
    transition: 0.3s ease-in-out;
`

export const HoverContainer = styled(Container)`
    height:100%;
    margin-top:5rem;
    max-height:48rem;
    position:relative;
    border-radius:7.5px;
    overflow:hidden;
    &:hover{
        ${HoverText}{
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const HoverPhoto = styled(Container)`
    position:absolute;
    height:100%;
    width: 100%;
    cursor: pointer;
    z-index:5;
`
