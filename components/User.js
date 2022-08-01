import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

const { motion } = require("framer-motion");

export default function User() {
  const route = useRouter();
  const { user } = useUser();

  if (!user)
    return (
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -200, opacity: 0 }}
        transition={{ type: "Inertia", duration: 0.5 }}
        onClick={() => route.push("/api/auth/login")}
      >
        <FaUserCircle />
        <h3>Login</h3>
      </motion.div>
    );
  return (
    <Profile
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -200, opacity: 0 }}
      transition={{ type: "Inertia", duration: 0.5 }}
      onClick={() => route.push("/profile")}
    >
      <img src={user.picture} alt={user.name} referrerPolicy="no-referrer" />
      <h3>{user.name}</h3>
    </Profile>
  );
}

const Profile = styled(motion.div)`
  img {
    border-radius: 50%;
    width: 1.7rem;
    height: 1.7rem;
  }

  h3 {
    text-align: center;
    max-width: 420px;
    word-wrap: break-word;
    word-break: break-word;
  }
`;
