"use client";

import { AnimationType } from "@/interfaces";
import { getAnimationValues } from "@/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface Props {
  text: string;
  className: React.ComponentProps<"p">["className"];
  animationkey: AnimationType;
}

export const AnimatedP = ({ text, animationkey, className }: Props) => {
  const animation = getAnimationValues(animationkey);

  return (
    <motion.p
      initial={animation?.initial}
      whileInView={animation?.whileInView}
      transition={animation?.transition}
      className={className}
    >
      {text}
    </motion.p>
  );
};
