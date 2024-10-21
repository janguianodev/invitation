"use client";

import React from "react";

interface Props {
  link: string;
  text: string;
  className?: React.ComponentProps<"button">["className"];
}

export const LinkButton = ({ link, className, text }: Props) => {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.open(`${link}`, "_blank")}
    >
      {text}
    </button>
  );
};
