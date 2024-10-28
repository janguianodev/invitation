import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#9bb78f",
        },
        secondary: {
          DEFAULT: "#fbb498",
        },
        tertiary: {
          DEFAULT: "#222222",
        },
        custom: {
          primary: "var(--custom-primary)",
          secondary: "var(--custom-secondary)",
          tertiary: "var(--custom-tertiary)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
