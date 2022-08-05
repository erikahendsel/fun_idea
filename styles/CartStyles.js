import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 90%;
  background: var(--background-color);
  padding: 2em 1em;
  overflow-y: scroll;
  position: relative;

  @media only screen and (min-width: 500px) {
    width: 60%;
  }
  @media only screen and (min-width: 700px) {
    padding: 2em 4em;
  }
  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
  @media only screen and (min-width: 1600px) {
    width: 30%;
  }
`;

export const CloseButtonContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.3em;
  color: var(--secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: var(--text-color);
    svg {
      transition: all 0.2s ease;
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const Card = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  background: var(--primary-shade);
  padding: 1em;
  margin: 1em 0em;
  img {
    width: 100%;
    border-radius: 10px;
    cursor: default;
  }

  h2 {
    margin: 0.5em 0;
  }

  h3 {
    margin-bottom: 0.5em;
  }

  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: flex-start;

    img {
      width: 10rem;
      height: 9rem;
      object-fit: cover;
    }
  }
`;

export const CardInfo = styled(motion.div)`
  @media only screen and (min-width: 1000px) {
    margin-left: 1.5rem;
  }
`;

export const EmptyStyle = styled(motion.div)`
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin-bottom: 2em;
  }
  img {
    cursor: default;
  }
`;

export const Checkout = styled(motion.div)`
  h3 {
    margin: 2em 0 1em 0;
  }
`;

export const Cards = styled(motion.div)``;
