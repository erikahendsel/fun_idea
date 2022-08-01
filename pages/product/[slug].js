import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  Buy,
  DetailsStyle,
  ProductInfo,
  QuantityPicker,
  DetailsContent,
  ButtonsContainer,
  TextContent,
} from "../../styles/ProductDetails";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Link from "next/link";
const { motion } = require("framer-motion");

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function ProductDetails() {
  const size = useWindowSize();

  //USe State
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  //Reset Qty
  useEffect(() => {
    setQty(1);
  }, []);

  //Fetch Slug
  const { query } = useRouter();
  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  //Check for data coming in
  if (fetching)
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error)
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  //Create a toast
  const notify = () => {
    toast.success(`${title} added to your cart`, {
      duration: 1500,
    });
  };

  //Extract our data
  const {
    title,
    description,
    price,
    image,
    image_source_link,
    image_source_text,
    description_source_link,
    description_source_text,
  } = data.products.data[0].attributes;

  const splitDescriptionIntoParagaphs = description.split("\n");

  return (
    <DetailsStyle>
      {size.width >= 1000 ? (
        <motion.img
          animate={{ x: 0, opacity: 1, scale: 1 }}
          initial={{ x: -400, opacity: 0, scale: 0.4 }}
          transition={{ type: "Inertia", duration: 0.7 }}
          src={image.data.attributes.formats.large.url}
          alt={title}
        />
      ) : (
        <motion.img
          animate={{ x: 0, opacity: 1, scale: 1 }}
          initial={{ x: -400, opacity: 0, scale: 0.4 }}
          transition={{ type: "Inertia", duration: 0.7 }}
          src={image.data.attributes.formats.medium.url}
          alt={title}
        />
      )}

      <DetailsContent>
        <ButtonsContainer
          layout
          variants={cards}
          initial="hidden"
          animate="show"
        >
          <QuantityPicker>
            <motion.h3 layout variants={card}>
              €{price}
            </motion.h3>
            <motion.span layout variants={card}>
              Quantity
            </motion.span>
            <motion.div layout variants={card}>
              <button onClick={decreaseQty}>
                <FaMinus />
              </button>
              <p>{qty}</p>
              <button onClick={increaseQty}>
                <FaPlus />
              </button>
            </motion.div>
          </QuantityPicker>
          <motion.button
            layout
            variants={card}
            onClick={() => {
              onAdd(data.products.data[0].attributes, qty);
              notify();
            }}
            className="primaryBtn"
          >
            Add to cart
          </motion.button>
        </ButtonsContainer>

        <TextContent
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -200, opacity: 0 }}
          transition={{ type: "Inertia", duration: 0.7 }}
        >
          <h2>{title}</h2>
          {splitDescriptionIntoParagaphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <p>Image source:</p>
          <Link href={image_source_link} passHref={true}>
            <a target="_blank">{image_source_text}</a>
          </Link>
          <p>Description source: </p>
          <Link href={description_source_link}>
            <a target="_blank">{description_source_text}</a>
          </Link>
        </TextContent>
      </DetailsContent>
    </DetailsStyle>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below on the client side
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}
