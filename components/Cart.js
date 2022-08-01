import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
  CloseButtonContainer,
} from "../styles/CartStyles";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { QuantityPicker } from "../styles/ProductDetails";
import getStripe from "../lib/getStripe";
import EmptyCartImage from "../public/book_with_lightbulb.png";
import Image from "next/image";

//Animation Variants
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

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //Payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButtonContainer onClick={() => setShowCart(false)}>
          <IoArrowBack />
          <span>Back</span>
        </CloseButtonContainer>

        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>The cart is out of ideas</h1>
            {/* <FaShoppingCart /> */}
            <Image
              src={EmptyCartImage}
              alt="Book with lightbulb"
              width={200}
              height={166}
            />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card layout variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CardInfo>
                    <h2>{item.title}</h2>
                    <h3>€{item.price}</h3>
                    <QuantityPicker>
                      <span>Quantity</span>
                      <div>
                        <button onClick={() => onRemove(item)}>
                          <FaMinus />
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => onAdd(item, 1)}>
                          <FaPlus />
                        </button>
                      </div>
                    </QuantityPicker>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: {totalPrice}$</h3>
            <button className="primaryBtn" onClick={handleCheckout}>
              Purchase
            </button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
