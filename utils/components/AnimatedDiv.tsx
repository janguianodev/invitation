"use client";

import { AnimationType } from "@/interfaces";
import { motion } from "framer-motion";
import { getAnimationValues } from "../animations";

interface Props {
  animationkey: AnimationType;
  children: React.ReactNode;
  className: React.ComponentProps<"li">["className"];
}

export const AnimatedDiv = ({ animationkey, children, className }: Props) => {
  const animation = getAnimationValues(animationkey);

  return (
    <motion.div
      className={className}
      initial={animation?.initial}
      whileInView={animation?.whileInView}
      transition={animation?.transition}
    >
      {children}
    </motion.div>
  );
};
