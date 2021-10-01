import { motion } from "framer-motion";
import styled from "styled-components";

export const Image = styled(motion.img)`
  content: url(${(props) => props.src});
  width: 100%;
  max-width: 30rem;
  position: absolute;
  right: -15%;
  top: -40%;
  z-index: 99;

  @media (max-width: 600px) {
    display: none;
  }
`;
