import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { NavItems, NavStyles } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import Image from "next/image";
import Logo from "../public/logo_new.svg";
import { useRouter } from "next/router";

//This detectes when component gets removed
const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const route = useRouter();
  return (
    <NavStyles>
      <motion.div
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: -200, opacity: 0, scale: 0 }}
        transition={{ type: "Inertia", duration: 0.5 }}
      >
        <Image
          onClick={() => route.push("/")}
          src={Logo}
          alt="FunPlan"
          width={120}
          height={120}
        />
      </motion.div>

      <NavItems>
        <User />
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -200, opacity: 0 }}
          transition={{ type: "Inertia", duration: 0.7 }}
          onClick={() => setShowCart(true)}
        >
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <BsCart3 />
          <h3>Cart</h3>
        </motion.div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
