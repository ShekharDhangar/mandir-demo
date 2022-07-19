import styled from 'styled-components'
import { motion } from "framer-motion";

const UnderlineText = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  left: 0px;
  right:0px;
  height: 0.25rem;
  background-color:#c70519;
`;

export const Underline = () => <UnderlineText layoutId="underline" layout />;