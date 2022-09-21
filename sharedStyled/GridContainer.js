import styled, { css } from "styled-components";
import { CommonContainer } from "./CommonContainer";

export const GridContainer = styled(CommonContainer)`
    display:${props => props.display ? props.display : "grid"};
    
    ${(props) =>
        props.justify &&
        css`
            justify-content: ${() => props.justify};
        `}
    ${(props) =>
        props.align &&
        css`
            align-items: ${() => props.align};
        `}
    ${(props) =>
        props.gap &&
        css`
            grid-gap: ${() => props.gap};
        `}
`;
