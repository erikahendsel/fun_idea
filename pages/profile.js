import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import currencyFormatter from "../lib/currencyFormatter";
import {
  UserProfileContainer,
  UserInfo,
  OrderContainer,
  Order,
} from "../styles/UserStyles";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <UserProfileContainer>
        <UserInfo>
          <img
            src={user.picture}
            alt={user.name}
            referrerPolicy="no-referrer"
          />
          {user.name !== user.email ? <h2>{user.name}</h2> : ""}
          <p>{user.email}</p>
          <button
            className="primaryBtn"
            onClick={() => route.push("/api/auth/logout")}
          >
            Logout
          </button>
        </UserInfo>

        <OrderContainer>
          {orders.map((order) => (
            <Order key={order.id}>
              <p>
                <b>Order Number:</b> {order.id}
              </p>
              <p>
                <b>Amount:</b> {currencyFormatter(order.amount)}
              </p>
              <p>
                <b>Receipt Email:</b> {user.email}
              </p>
            </Order>
          ))}
        </OrderContainer>
      </UserProfileContainer>
    )
  );
}
