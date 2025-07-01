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
          DEFAULT: "#222222",
        },
        invitation: {
          primary: "#F79661",
          secondary: "#808C77",
          tertiary: "#E5E8E3",
        },
        template2: {
          primary: "#B3CEE5",
          secondary: "#275072",
          tertiary: "#edf4f9",
        },
      },
    },
  },
  plugins: [],
};

export default config;
