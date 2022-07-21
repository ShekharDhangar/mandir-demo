import styled from "styled-components";
import { FlexContainer } from "../../../sharedStyled";
export const AccordionSection = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  width:50rem;
  flex-shrink:1 1 100%;
`;

export const Wrap = styled(FlexContainer)`
  background: #272727;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size:1.75rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled(FlexContainer)`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 1.75rem;
  }
`;
