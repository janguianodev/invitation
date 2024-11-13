import { template1Font } from "@/fonts";
import React from "react";

export const Footer = () => {
  return (
    <div
      className={`${template1Font.className} flex w-full justify-center text-xs bg-custom-tertiary p-12`}
    >
      <span className={`text-custom-secondary antialiased font-bold `}>
        Ana &amp; Josue
      </span>
      <span className="text-custom-secondary">
        &copy; {new Date().getFullYear()}
      </span>
    </div>
  );
};
