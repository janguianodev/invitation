"use client";

import { AlertVariant, getAnimationValues } from "@/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  message: string;
  variant: AlertVariant;
  onClose: () => void;
}

export const Alert: React.FC<Props> = ({ message, variant, onClose }) => {
  const ANIMATION_KEY = "alertAnimation";
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case AlertVariant.SUCCESS:
        return "bg-green-500";
      case AlertVariant.ERROR:
        return "bg-red-500";
      case AlertVariant.INFO:
        return "bg-blue-500";
      case AlertVariant.WARNING:
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const animation = getAnimationValues(ANIMATION_KEY);

  return (
    <motion.div
      {...animation}
      exit={{ opacity: 0 }}
      className={`fixed flex w-1/2 p-3 text-sm text-white ${getVariantStyles()} rounded-md mb-4 top-16 right-2 `}
      style={{ zIndex: 100 }}
    >
      {message}
      <button
        className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
        type="button"
        onClick={onClose}
      >
        <IoCloseOutline size={20} />
      </button>
    </motion.div>
  );
};
