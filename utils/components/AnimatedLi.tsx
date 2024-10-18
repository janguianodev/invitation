"use client";

import { AnimationType } from "@/interfaces";
import { motion } from "framer-motion";
import { getAnimationValues } from "../animations";

interface Props {
  animationkey: AnimationType;
  children: React.ReactNode;
  className: React.ComponentProps<"li">["className"];
}

export const AnimatedLi = ({ animationkey, children, className }: Props) => {
  const animation = getAnimationValues(animationkey);

  return (
    <motion.li
      className={className}
      initial={animation?.initial}
      whileInView={animation?.whileInView}
      transition={animation?.transition}
    >
      {children}
    </motion.li>
  );
};
