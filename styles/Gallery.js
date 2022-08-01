import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 2rem;
  margin: 0 1em 1em 1em;

  @media only screen and (min-width: 700px) {
    margin: 0 4em 1em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 0 8em 2em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 0 16em 2em 16em;
  }
`;
