// 404.js
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ErrorImage from "../public/cast_away.jpg";

export default function FourOhFour() {
  return (
    <ErrorContainer
      animate={{ y: 0, opacity: 1, scale: 1 }}
      initial={{ y: -200, opacity: 0, scale: 0 }}
      transition={{ type: "Inertia", duration: 0.5 }}
    >
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href="/">
          <button className="primaryBtn">Go back home</button>
        </Link>
      </div>

      <Image src={ErrorImage} alt="cast away man" width={600} height={400} />
    </ErrorContainer>
  );
}

const ErrorContainer = styled(motion.div)`
  margin: 2em 1em;
  text-align: center;

  h1 {
    font-size: 8rem;
  }
  * {
    margin-bottom: 1rem;
  }

  img {
    border-radius: 30px;
  }

  @media only screen and (min-width: 700px) {
    margin: 2em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 2em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 2em 16em;
  }
`;
