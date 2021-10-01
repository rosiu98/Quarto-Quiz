import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  /* background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%); */

  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 3.5rem;
  border-radius: 4rem;
  color: white;
  font-family: "Titan One", cursive;
  font-size: 2.4rem;
  position: absolute;
  z-index: 1;
  min-width: 21rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
