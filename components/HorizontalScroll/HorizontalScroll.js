import React from 'react'
import ImageGrid from '../ImageGrid/ImageGrid'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import { HorizontalWrapper, HorizontalInnerWrapper, Page, ImageGridOuter } from './styled.horizontalScroll'

function HorizontalScroll() {
  return (
    <HorizontalWrapper >
      <HorizontalInnerWrapper >
        <Page>
          <Section1 />
          <ImageGridOuter>
            <ImageGrid />
          </ImageGridOuter>
        </Page>
        <Page>
          <Section2 />
        </Page>
        <Page>
          <Section3 />
        </Page>
        <Page>
          <Section4 />
        </Page>
      </HorizontalInnerWrapper>
    </HorizontalWrapper>
  )
}

export default HorizontalScroll