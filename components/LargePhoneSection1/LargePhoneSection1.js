import React from 'react'
import { FlexContainer, Container } from '../../sharedStyled'
import Section1 from '../Section1/Section1'
import LargePhoneGrid from './LargePhoneGrid'
import styled from 'styled-components'
const TabletGridWrapper = styled(FlexContainer)`
  position:absolute;
  height:100vh;
  z-index:1;
  padding-top:7rem;
  align-items:start;
  overflow:hidden;
`
function LargePhoneSection1() {
    return (
        <Container display="flex" position="relative" maxH="100vh"  >
            <Section1 />
            <FlexContainer position="relative" h="100vh" justify="end" w="100vw"  >
                <TabletGridWrapper  >
                    <LargePhoneGrid />
                </TabletGridWrapper>
            </FlexContainer>
        </Container>
    )
}

export default LargePhoneSection1