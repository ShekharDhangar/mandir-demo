import Navbar from '../components/Navbar/Navbar';
import { VerticalWrapper } from '../styles/styled.index';
import Tabs from '../components/Section5/Section5';
import { Container } from '../sharedStyled';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import { Page } from '../components/HorizontalScroll/styled.horizontalScroll';

export default function Home() {
  // const scrollRef = useHorizontalScroll();
  return (
    <>
      <Navbar />
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
