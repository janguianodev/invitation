"use client";

import { useEffect } from "react";

export default function ColorInitializer() {
  // TODO: use server action to get custom colors
  const getCustomColors = async () => {
    return {
      primary: "#F79661",
      secondary: "#808C77",
      tertiary: "#E5E8E3",
    };
  };

  useEffect(() => {
    getCustomColors().then((colors) => {
      const root = document.documentElement;
      root.style.setProperty("--custom-primary", colors.primary);
      root.style.setProperty("--custom-secondary", colors.secondary);
      root.style.setProperty("--custom-tertiary", colors.tertiary);
    });
  }, []);

  return null;
}
