import { motion } from "framer-motion";
import styled from "styled-components";

export const NavStyles = styled(motion.nav)`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 1em 0.5em 1em;
  font-size: 1rem;
  a {
    font-size: 1.2rem;
  }
  img {
    cursor: pointer;
  }

  @media only screen and (min-width: 700px) {
    margin: 0.5em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 0.5em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 0.5em 16em;
  }
`;

export const NavItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  cursor: pointer;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    background: var(--primary);
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    font-weight: 700;
    pointer-events: none;
  }

  @media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;
  }
`;
