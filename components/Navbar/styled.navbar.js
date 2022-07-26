import styled from 'styled-components'
import { motion } from "framer-motion";
import { FlexContainer, Container } from '../../sharedStyled';
import { media } from '../../sharedStyled/mediaQueries'
const Header = styled.header`
    position: fixed;
    background-color:transparent;
	top: 0rem;
	z-index: 5;
    width:100vw;
`
const NavItemsContainer = styled(FlexContainer)`
    list-style-type: none;
    ${media.custom(768, "max")} {
        display: none;
    }
`
const NavItem = styled(motion.li)`
    font-weight:bold;
    font-size:1.55rem;
    color:whitesmoke;
    position:relative;
    padding:1.5rem 2rem;
    cursor: pointer;
`
export { NavItemsContainer, Header, NavItem };

export const MenuIcon = styled(Container)`
${media.custom(768.5)} {
        display: none;
    }
    color:darkblue;
    cursor:pointer;
    margin-top:2rem;
    font-size:3.5rem;
    margin-left:auto;
`
export const NavLogo = styled(Container)`
    ${media.custom(768, "max")} {
        display: none;
    }
`