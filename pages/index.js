import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";
import Hero from "../components/Hero";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for data coming in
  if (fetching)
    return (
      <div className="loading-container">
        <div className="loading-animation">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading... This might take few minutes</p>
      </div>
    );
  if (error)
    return (
      <div className="loading-container">
        <div className="loading-animation">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Loading... This might take few minutes</p>
      </div>
    );
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Fun Idea 🖤</title>
        <meta name="description" content="React Portfolio by Erika Hendsel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <IntroductionText
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Having trouble coming up with ideas?</h2>
          <p>
            We have things to do with your family, friends and partner! We got
            you!
          </p>
          <p>
            You can go through our list and even add ideas to your cart!
            We&apos;ll send you a lovely e-mail with your chosen activities.
          </p>
        </IntroductionText>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}

export const IntroductionText = styled(motion.div)`
  margin: 2em 1em;
  h2,
  p {
    margin-bottom: 1em;
  }
  @media only screen and (min-width: 700px) {
    margin: 2em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 3em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 4em 16em;
  }
`;
