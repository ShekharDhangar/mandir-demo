import Image from 'next/image';
import { navbarData } from '../../data/navbarData';
import { NavItemsContainer, Header } from './styled.navbar';
import { MenuItem } from './Menu/Menu';
import { SubItem } from './SubMenu/SubMenu';
import { FlexContainer } from '../../sharedStyled';

export default function Navbar() {
    console.log('navbar render')
    return (
        <Header>
            <FlexContainer justify="space-between" align="center" px="2rem">
                <Image
                    src="https://res.cloudinary.com/shekarassets/image/upload/v1656958533/logo_t6etyi.png"
                    alt="logo"
                    width={95}
                    height={90}
                />
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
                <button>Donate</button>
            </FlexContainer>
        </Header >
    );
}
