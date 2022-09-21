import styled, { css } from "styled-components";
export const CommonContainer = styled.div`
    /* font */
    ${(props) =>
        props.fw &&
        css`
            font-weight: ${() => props.fw};
        `}
    ${(props) =>
        props.fs &&
        css`
            font-size: ${() => props.fs};
        `}
    /* colour */
    ${(props) =>
        props.color &&
        css`
            color: ${() => props.color};
        `}
    ${(props) =>
        props.bgc &&
        css`
            background-color: ${() => props.bgc};
        `}
    /* height */
    ${(props) =>
        props.h &&
        css`
            height: ${() => props.h};
        `}
    ${(props) =>
        props.minH &&
        css`
            min-height: ${() => props.minH};
        `}
    ${(props) =>
        props.maxH &&
        css`
            max-height: ${() => props.maxH};
        `}
    /* width */
    ${(props) =>
        props.w &&
        css`
            width: ${() => props.w};
        `}
    ${(props) =>
        props.minW &&
        css`
            min-width: ${() => props.minW};
        `}
    ${(props) =>
        props.maxW &&
        css`
            max-width: ${() => props.maxW};
        `}
    /* padding */
    ${(props) =>
        props.p &&
        css`
            padding: ${() => props.p};
        `}
    ${(props) =>
        props.pt &&
        css`
            padding-top: ${() => props.pt};
        `}
    ${(props) =>
        props.pb &&
        css`
            padding-bottom: ${() => props.pb};
        `}
    ${(props) =>
        props.pl &&
        css`
            padding-left: ${() => props.pl};
        `}
    ${(props) =>
        props.px &&
        css`
            padding-inline: ${() => props.px};
        `}
    ${(props) =>
        props.pr &&
        css`
            padding-right: ${() => props.pr};
        `}
    /* border */
    ${(props) =>
        props.b &&
        css`
            border: ${() => props.b};
        `}
    ${(props) =>
        props.bt &&
        css`
            border-top: ${() => props.bt};
        `}
    ${(props) =>
        props.bb &&
        css`
            border-bottom: ${() => props.bb};
        `}
    ${(props) =>
        props.br &&
        css`
            border-radius: ${() => props.br};
        `}
    /* margin */
    ${(props) =>
        props.m &&
        css`
            margin: ${() => props.m};
        `}
    ${(props) =>
        props.mb &&
        css`
            margin-bottom: ${() => props.mb};
        `}
    ${(props) =>
        props.mt &&
        css`
            margin-top: ${() => props.mt};
        `}
    ${(props) =>
        props.ml &&
        css`
            margin-left: ${() => props.ml};
        `}
    ${(props) =>
        props.mr &&
        css`
            margin-right: ${() => props.mr};
        `}
    ${(props) =>
        props.my &&
        css`
            margin-top: ${() => props.my};
            margin-bottom: ${() => props.my};
        `}
    ${(props) =>
        props.mx &&
        css`
            margin-inline: ${() => props.mx};
        `}
    /* positioning */
    ${(props) =>
        props.position &&
        css`
            position: ${() => props.position};
        `}
    ${(props) =>
        props.top &&
        css`
            top: ${() => props.top};
        `}
    ${(props) =>
        props.bottom &&
        css`
            bottom: ${() => props.bottom};
        `}
    ${(props) =>
        props.left &&
        css`
            left: ${() => props.left};
        `}
    ${(props) =>
        props.right &&
        css`
            right: ${() => props.right};
        `}
    /* miscellaneous */
    ${(props) =>
        props.cursor &&
        css`
            cursor: ${() => props.cursor};
        `}
    ${(props) =>
        props.textAlign &&
        css`
            text-align: ${() => props.textAlign};
        `}
    ${(props) =>
        props.opacity &&
        css`
            opacity: ${() => props.opacity};
        `}
    ${(props) =>
        props.zIndex &&
        css`
            z-index: ${() => props.zIndex};
        `}
    ${(props) =>
        props.overflow &&
        css`
            overflow: ${() => props.overflow};
        `}
    ${(props) =>
        props.display &&
        css`
            display: ${() => props.display};
        `}
    ${(props) =>
        props.whiteSpace &&
        css`
            white-space: ${() => props.whiteSpace};
        `}
    ${(props) =>
        props.overFlowWrap &&
        css`
            overflow-wrap: ${() => props.overFlowWrap};
        `}
    &:hover {
        ${(props) => props.hover}
    }
`;