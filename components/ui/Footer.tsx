import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs bg-tertiary p-12">
      <span className={`text-secondary antialiased font-bold `}>
        Ana &amp; Josue
      </span>
      <span className="text-secondary">&copy; {new Date().getFullYear()}</span>
    </div>
  );
};
