import ImageGrid from '../components/ImageGrid/ImageGrid';
import Navbar from '../components/Navbar/Navbar';
import { HorizontalInnerWrapper, Page, HorizontalWrapper, ImageGridOuter } from '../styles/styled.index';
import Section3 from '../components/Section3/Section3';
import Section1 from '../components/Section1/Section1';
import Section2 from '../components/Section2/Section2';

export default function Home() {
  // const scrollRef = useHorizontalScroll();
  return (
    <>
      <Navbar />
      <HorizontalWrapper>
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
        </HorizontalInnerWrapper>
      </HorizontalWrapper>

    </>
  )
}
