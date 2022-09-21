import React from 'react'
import { GridImageLeft, GridImageRight } from '../ImageGrid/ImageGrid'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import styled from 'styled-components'
import { HorizontalWrapper, HorizontalInnerWrapper, Page, } from './styled.horizontalScroll'
import { FlexContainer } from '../../sharedStyled'

const GridWrapper = styled(FlexContainer)`
  position:absolute;
  height:100vh; 
  z-index:5;
  top:0;
  width:100%;
  overflow:hidden;
`
function HorizontalScroll() {
  return (

    <HorizontalWrapper >
      <HorizontalInnerWrapper >
        <Page>
          <Section1 />
          <GridWrapper justify="flex-end" >
            <GridImageLeft />
          </GridWrapper>
        </Page>
        <Page>
          <Section2 />
          <GridWrapper justify="flex-start" >
            <GridImageRight />
          </GridWrapper>
        </Page>
        <Page>
          <Section3 />
        </Page>
        <Page>
          <Section4 />
        </Page>
      </HorizontalInnerWrapper>
    </HorizontalWrapper >
  )
}

export default HorizontalScroll