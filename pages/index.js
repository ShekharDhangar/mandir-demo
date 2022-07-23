import Navbar from '../components/Navbar/Navbar';
import { VerticalWrapper } from '../styles/styled.index';
import Tabs from '../components/Section5/Section5';
import { Container } from '../sharedStyled';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import { Page } from '../components/HorizontalScroll/styled.horizontalScroll';
import TabletSection1 from '../components/TabletSection1/TabletSection1';
import Section4 from '../components/Section4/Section4';
import useMediaQuery from '@mui/material/useMediaQuery';
import Section1 from '../components/Section1/Section1';
import MobileSection1 from '../components/PhoneComponents/MobileSection1';
export default function Home() {
  let desktopPoint = useMediaQuery('(min-width:1201px)')
  let tabletBreakPoint = useMediaQuery('(max-width:1200px)');
  const mobileBreakPoint = useMediaQuery('(max-width:550px)')
  if (mobileBreakPoint) {
    desktopPoint = false;
    tabletBreakPoint = false;
  }
  return (
    <>
      <Navbar />
      {desktopPoint && (
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
      }
      {tabletBreakPoint && (
        <>
          <TabletSection1 />
          <Section4 />
        </>
      )
      }
      {mobileBreakPoint && <MobileSection1 />}
    </>
  )
}
