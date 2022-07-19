import { SubItemBox, SubItemDiv, SubItemText } from "./styled.submenu";
import { motion } from "framer-motion";
import { Container ,FlexContainer} from "../../../sharedStyled";
const SubItemVariants = {
    hidden: {
        // y: 5,
        // opacity: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const SubItemsContainer = ({ children }) => {
    return (
        <Container minW="max-content" >
            {children ? <SubItemBox as={motion.div}
                layoutId="menu"
                p="2rem"
                style={{ minWidth: 150 }}
                initial="hidden"
                animate="visible"
            >
                {children}
            </SubItemBox>
                : null}

        </Container>
    );
};


export const SubItem = ({ text }) => {
    return (
        <FlexContainer variants={SubItemVariants} as={motion.div} align="center" minW="max-content" cursor="pointer" layout  >
            <SubItemText>
                {text}
            </SubItemText>
        </FlexContainer>
    );
};