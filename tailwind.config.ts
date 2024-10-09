import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: {
          10: "#FFFFFF26",
          70: "#FFFFFFB3",
          100: "#FFFFFF",
        },
        primary: {
          100: "#190D2E",
          200: "#020103",
          300: "#361764",
          400: "#8C45FF66",
          500: "#9855FF",
          600: "#141315",
          700: "#B372CF",
          800: "#8C45FF",
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
      backgroundImage: {
        hero: "url('/hero_bg.svg')",
        product: "url('/product-image.png')",
      },
      boxShadow: {
        "product-shadow": "0px -70px 90px rgba(140, 69, 245, 0.25), 0 0 50px rgba(140, 69, 255, 0.4)",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
