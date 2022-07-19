import styled from "styled-components";
import { Container } from "../../sharedStyled";

export const TextContainer = styled(Container)`
    font-size:${props => props.fs ? props.fs : "2rem"}
        ${(props) =>
        props.color &&
        css`
            color: ${() => props.color};
        `}
`

