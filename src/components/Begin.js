import styled from "styled-components";
import { motion } from "framer-motion";

export const Begin = styled(motion.h1)`
  position: absolute;
  top: -150px;
  right: ${(props) => props.right};
  display: inline-block;
  height: fit-content;
  font-size: 2.4rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  writing-mode: vertical-rl;
`;
