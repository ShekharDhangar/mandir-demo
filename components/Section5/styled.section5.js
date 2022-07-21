import styled from "styled-components"
import { Container, FlexContainer } from "../../sharedStyled"
export const TabContainer = styled(Container)`
    border:2px solid black;
    width:70%;
    max-width:70%;
`
export const TabTitle = styled(Container)`
    font-size:3rem;
    padding:1rem ;
    margin:0 1rem ;
    cursor:pointer;
`
export const TabHead = styled(FlexContainer)`
    padding:1rem 0;
    width:100%;
    justify-content:center;
    align-items:center;
    border:1px solid black;

`
export const TabContent = styled(FlexContainer)`
    width:70%;
    margin:1rem;
    gap:3rem;
    justify-content:center;
    align-items:center;
`
export const TabContentText = styled(Container)`
    height:100%;
    width:100%;
`
export const TabText = styled.p`
    font-size:2rem;
`
export const LargeText = styled(Container)`
    font-size:4rem;
`