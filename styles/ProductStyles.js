import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductContainer = styled(motion.div)`
  background-color: var(--primary-shade);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 20px;
  .image-container {
    width: 100%;
    height: 250px;

    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  h2 {
    padding: 0.5rem 0rem;
  }
`;
