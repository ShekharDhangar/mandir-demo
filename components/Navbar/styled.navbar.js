import styled from 'styled-components'
import { motion } from "framer-motion";
import { FlexContainer } from '../../sharedStyled';

const Header = styled.header`
    position: fixed;
    background-color:transparent;
	top: 0rem;
	z-index: 10;
    width:100vw;
    /* border-bottom:1px solid white */
`
const NavItemsContainer = styled(FlexContainer)`
    list-style-type: none;
`
const NavItem = styled(motion.li)`
    font-weight:bold;
    font-size:1.55rem;
    color:whitesmoke;
    position:relative;
    padding:1.5rem 2rem;
    cursor: pointer;
`
export {  NavItemsContainer,Header, NavItem };
