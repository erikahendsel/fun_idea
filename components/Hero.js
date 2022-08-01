import Image from "next/image";
import Link from "next/link";
import HeroImg from "../public/early_morning.jpg";
import {
  HeroSection,
  HeroImageWrapper,
  HeroContent,
} from "../styles/HeroStyles";
const { motion } = require("framer-motion");

const content = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const contents = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
      type: "tween",
    },
  },
};

export default function Hero() {
  const scrollDown = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <HeroSection>
      <HeroImageWrapper
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
        transition={{ type: "Inertia", duration: 0.7 }}
      >
        <Image
          priority
          src={HeroImg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="couple camping"
          quality={100}
        />
      </HeroImageWrapper>

      <HeroContent layout variants={contents} initial="hidden" animate="show">
        <motion.h1 layout variants={content}>
          Fun Ideas
        </motion.h1>
        <motion.p layout variants={content}>
          Finding what to do next is easier than ever
        </motion.p>
        <motion.button
          layout
          variants={content}
          className="primaryBtn"
          onClick={scrollDown}
        >
          Scroll to all ideas
        </motion.button>
      </HeroContent>
    </HeroSection>
  );
}
