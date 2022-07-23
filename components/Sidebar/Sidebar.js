import React from 'react';
// import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import Link from 'next/link';
import { Aside, SidebarDiv, SidebarText } from './styled.sidebar';
import { Container, FlexContainer } from '../../sharedStyled';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useClickOutside } from '../../hooks/useClickOutside';
// import { pageLinks } from '../Navbar/navbar.data';
const pageLinks = [{
    id: 1,
    page: "HOME",
}, {
    id: 2,
    page: "ABOUT",
}, {
    id: 3,
    page: "CONTACT",
}, {
    id: 4,
    page: "DONATE",
}, {
    id: 5,
    page: "GET INVOLVED",
}, {
    id: 6,
    page: "PROJECTS",
}
]
const Sidebar = ({ showSidebar, setShowSidebar }) => {
    // const elementRef = useClickOutside(() => setShowSidebar(false))
    return (
        <Aside>
            <SidebarDiv as={motion.div}
                initial={{ x: "-100%" }}
                animate={{
                    x: 0
                }}
                exit={{
                    x: "100%"
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            // ref={elementRef}
            >
                <FlexContainer justify="center" mb="2rem" >
                    <Image
                        src="https://res.cloudinary.com/shekarassets/image/upload/v1658558770/logo_uygcz7.jpg"
                        alt="logo"
                        width={95}
                        height={90}
                    />
                </FlexContainer>
                <ul>
                    {pageLinks.map((singleLink) => (
                        <li key={singleLink?.id}>
                            <Link href="/"
                            // onClick={() => setShowSidebar(!showSidebar)}
                            >
                                <SidebarText
                                    style={{ display: 'inline-block' }}>
                                    {singleLink?.page}
                                </SidebarText>
                            </Link>
                        </li>
                    ))}
                </ul>
            </SidebarDiv>
        </Aside>
    );
};

export { Sidebar };