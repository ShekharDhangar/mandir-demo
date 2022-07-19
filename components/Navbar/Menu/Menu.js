import React, { useState } from "react";
import { Underline } from "../../UnderLine";
import { NavItem } from "../styled.navbar";
import { SubItemsContainer } from "../SubMenu/SubMenu";

// const MenuItemVariants = {
//     hidden: {
//         opacity: 0,
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.5,
//         },
//     },
// };
export const MenuItem = ({ text, children }) => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);
    return (
        <NavItem
            onHoverStart={() => setIsBeingHovered(true)}
            onHoverEnd={() => setIsBeingHovered(false)}
             >
            {text}
            {isBeingHovered && <Underline />}
            {isBeingHovered && (
                <SubItemsContainer layoutId='menu'  >{children}</SubItemsContainer>)}
        </NavItem>
    );
};