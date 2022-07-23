import Image from 'next/image';
import { navbarData } from '../../data/navbarData';
import { NavItemsContainer, Header, NavLogo, MenuIcon } from './styled.navbar';
import { MenuItem } from './Menu/Menu';
import { SubItem } from './SubMenu/SubMenu';
import { FlexContainer } from '../../sharedStyled';
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    console.log(showSidebar)
    return (
        <Header>
            <FlexContainer justify="space-between" align="center" px="2rem"  >
                <NavLogo>
                    <Image
                        src="https://res.cloudinary.com/shekarassets/image/upload/v1658558770/logo_uygcz7.jpg"
                        alt="logo"
                        width={95}
                        height={90}
                    />
                </NavLogo>
                <NavItemsContainer as="ul" justify="center" align="center" >
                    {navbarData.map((item) => {
                        return (
                            <MenuItem key={item.title} text={item.title} >
                                {item.properties && item.properties.map(property => (
                                    <SubItem key={property.label} text={property.label} />))}
                            </MenuItem>
                        )
                    })}
                </NavItemsContainer>
                <MenuIcon onClick={() => setShowSidebar(showSidebar => !showSidebar)} >
                    <BiMenuAltRight />
                </MenuIcon>
                {showSidebar && (<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />)}
                {/* <Container  >
                <button styles={{ visibility: "hidden" }} ></button>
                </Container> */}
            </FlexContainer>
        </Header >
    );
}
