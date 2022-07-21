// import styled from "styled-components"
import styled from "styled-components"
import { Container, FlexContainer } from "../sharedStyled"

export const VerticalWrapper = styled(Container)`
overflow-x:scroll;
overflow-y:hidden;
height:100vh;
scroll-snap-type:x mandatory;
  border:2px solid green;
`