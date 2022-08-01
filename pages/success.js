import { useRouter } from "next/router";
import styled from "styled-components";
import currencyFormatter from "../lib/currencyFormatter";
const { motion } = require("framer-motion");

const stripe = require(`stripe`)(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();

  return (
    <SuccessContainer>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.75 }}
      >
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {currencyFormatter(item.price.unit_amount)}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <button className="primaryBtn" onClick={() => route.push("/")}>
          Back to Home
        </button>
      </Card>
    </SuccessContainer>
  );
}

const SuccessContainer = styled.div`
  margin: 3em 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 700px) {
    margin: 3em 4em;
  }
  @media only screen and (min-width: 1000px) {
    margin: 3em 8em;
  }
  @media only screen and (min-width: 1600px) {
    margin: 3em 16em;
  }
`;
const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  background: white;
  border-radius: 2rem;
  padding: 3rem;

  h2 {
    margin: 1rem 0;
  }
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding: 1em 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--primary-shade);
    }
  }
`;

const InfoWrapper = styled.div`
  margin: 2em 0;
`;
