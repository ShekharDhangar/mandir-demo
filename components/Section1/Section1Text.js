import styled from "styled-components"
import { Text } from "../Typography/Typography"
const HeroTextContainer = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    padding-bottom:15rem;
    margin-left:5rem;
    max-width:max-content;
    align-items:center;
    font-size:5rem;
    position:relative;
    z-index:10;
`


export const HeroText = () => (
    <HeroTextContainer>
        <div>
        <Text fs="3rem" text="Welcome to the" />
        <Text fs="6rem" text="Internation Wildlife" />
        </div>
    </HeroTextContainer>
)