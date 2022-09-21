import { Container, FlexContainer } from "../../sharedStyled"
import Section1 from "../Section1/Section1"
import styled from "styled-components"
import TabletImageGrid from "../TabletImageGrid/TabletImageGrid"

const TabletGridWrapper = styled(FlexContainer)`
  position:absolute;
  height:100vh;
  z-index:2;
  padding-top:7rem;
  align-items:center;
  overflow:hidden;
`
export default function TabletSection1() {
    return (
        <Container display="flex" position="relative" maxH="100vh"  >
            <Section1 />
            <FlexContainer position="relative" h="100vh" justify="end" w="100vw"  >
                <TabletGridWrapper  >
                    <TabletImageGrid />
                </TabletGridWrapper>
            </FlexContainer>
        </Container>
    )
}
