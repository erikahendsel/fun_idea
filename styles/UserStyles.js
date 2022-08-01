import styled from "styled-components";

export const UserProfileContainer = styled.div`
  margin: 4em 1em;
  @media only screen and (min-width: 700px) {
    margin: 4em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 6em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 6em 16em;
  }
`;

export const UserInfo = styled.div`
  text-align: center;

  img {
    border-radius: 50%;
  }
  * {
    margin-bottom: 1em;
  }
`;

export const OrderContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 0.1em 1em;
  margin-top: 2em;
`;

export const Order = styled.div`
  padding: 2rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-shade);
  }

  h1 {
    font-size: 1rem;
  }
`;
