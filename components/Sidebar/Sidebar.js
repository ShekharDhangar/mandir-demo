import React from 'react';
import Link from 'next/link';
import { Aside, SidebarDiv, SidebarText } from './styled.sidebar';
import { Container, FlexContainer } from '../../sharedStyled';
import Image from 'next/image';
import { useClickOutside } from '../../hooks/useClickOutside';
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
    return (
        <Aside open={showSidebar}  >
            <SidebarDiv 
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
        </Aside >
    )

};

export { Sidebar };