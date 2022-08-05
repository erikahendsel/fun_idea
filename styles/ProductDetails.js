import styled from "styled-components";
const { motion } = require("framer-motion");

export const DetailsStyle = styled.article`
  p {
    /* margin-top: 1em; */
  }
  img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }

  @media only screen and (min-width: 1600px) {
    display: flex;

    img {
      width: auto;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
`;

export const DetailsContent = styled.div`
  margin: 1em;
  @media only screen and (min-width: 700px) {
    margin: 2em 4em;
  }

  @media only screen and (min-width: 1000px) {
    margin: 3em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin-right: 16em;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: space-between;

  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;
  }
  @media only screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: initial;
  }
  @media only screen and (min-width: 2000px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;
  }
`;

export const TextContent = styled(motion.div)`
  h2 {
    margin-top: 2em;
  }
  p {
    margin-top: 1em;
    text-align: justify;
  }
  a {
    text-decoration: underline;
    transition: all 0.2s ease;
    &:hover {
      color: var(--primary);
    }
  }
`;

export const QuantityPicker = styled(motion.div)`
  text-align: center;
  width: fit-content;

  div {
    display: flex;
    align-items: center;
    height: 3rem;
    width: fit-content;
    background-color: white;
    border-radius: 100px;
    margin-top: 0.3em;

    p {
      width: 30px;
      text-align: center;
    }

    button {
      background-color: transparent;
      border: none;
      width: 60px;
      height: 100%;
      cursor: pointer;

      &:hover {
        svg {
          color: var(--primary-dark);
        }
      }

      svg {
        color: var(--primary);
        transition: all 0.2s ease;
      }
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
