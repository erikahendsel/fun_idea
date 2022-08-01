import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps, router }) {
  return (
    <UserProvider>
      <StateContext>
        {/* This provider will give access to backend to all pages inside the component */}
        <Provider value={client}>
          {/* All pages will be rendered here */}
          <Toaster />
          <Nav />
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
