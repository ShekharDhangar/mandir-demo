import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FlexContainer } from '../../sharedStyled';
import Image from 'next/image';
import { TabContainer, TabHead, TabTitle, TabContent, TabContentText, LargeText, TabText } from './styled.section5';

const tabsData = [{
    title: "title",
    url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103114/siby-QXIBCvvA_jc-unsplash_dtqwzb.jpg",
    content: {
        heading: "heading",
        text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    }
}, {
    title: "title",
    url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103106/varun-pyasi-AZ4y6Bc3qeI-unsplash_eeqe0u.jpg",
    content: {
        heading: "heading",
        text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    }
}, {
    url: "https://res.cloudinary.com/shekarassets/image/upload/v1657103097/sk-fY-ArEvk7sc-unsplash_a0rsvz.jpg",
    title: "title ",
    content: {
        heading: "heading",
        text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    }
}];

function Tabs() {
    const [selectedTab, setSelectedTab] = React.useState(tabsData[0]);
    return (
        <FlexContainer h="100vh" b="1px solid black" w="100vw" justify="center" align="center" >
            <TabContainer>
                <TabHead>
                    {tabsData.map(tab => {
                        return (
                            <>
                                <TabTitle as="li" key={tab.title} onClick={() => setSelectedTab(() => tab)} >
                                    {tab.title}
                                </TabTitle>
                            </>
                        )
                    })}
                </TabHead>
                <FlexContainer w="100%" justify="center" >
                    <AnimatePresence exitBeforeEnter>
                        <TabContent as={motion.div}
                            key={selectedTab ? selectedTab.title : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Image
                                src={selectedTab.url}
                                // layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                width="400"
                                height="400"
                            />
                            <TabContentText>
                                <LargeText>
                                    {selectedTab.content.heading}
                                </LargeText>
                                <TabText>{selectedTab.content.text}</TabText>
                            </TabContentText>
                        </TabContent>
                    </AnimatePresence>
                </FlexContainer>
            </TabContainer>
        </FlexContainer>

    )
}

export default Tabs