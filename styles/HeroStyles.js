import styled from "styled-components";
const { motion } = require("framer-motion");

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  @media only screen and (min-width: 1000px) {
    height: 70vh;
  }
  @media only screen and (min-width: 1600px) {
    height: 80vh;
  }
`;

export const HeroImageWrapper = styled(motion.div)`
  /* z-index: -1; */
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const HeroContent = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  margin: 0 1em;
  text-align: center;
`;
