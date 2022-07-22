import Navbar from '../components/Navbar/Navbar';
import { VerticalWrapper } from '../styles/styled.index';
import Tabs from '../components/Section5/Section5';
import { Container } from '../sharedStyled';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import { Page } from '../components/HorizontalScroll/styled.horizontalScroll';
import { useMediaQuery } from '../hooks/useMediaQuery';
import TabletSection1 from '../components/TabletSection1/TabletSection1';
import Section4 from '../components/Section4/Section4';

export default function Home() {
  // const scrollRef = useHorizontalScroll();
  const tabletBreakPoint = useMediaQuery(1200);
  return (
    <>
      <Navbar />
      {tabletBreakPoint
        ? (
          <>
            <Container maxH="100vh" h="100vh" >
              <HorizontalScroll />
            </Container>
            <VerticalWrapper>
              <Page>
                <Tabs />
              </Page>
            </VerticalWrapper>
          </>
        )
        : (
          <>
            <TabletSection1 />
            <Section4 />
          </>
        )
      }

    </>
  )
}
