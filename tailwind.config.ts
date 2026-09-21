import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f0ff",
          100: "#efe4ff",
          200: "#dcc5ff",
          300: "#c49cff",
          400: "#a66aff",
          500: "#8b3dff",
          600: "#772ae6",
          700: "#611dc0",
          800: "#4f1b99",
          900: "#411d7c",
        },
        accent: {
          500: "#ff4d6d",
          600: "#f43f5e",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 61, 255, 0.35)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at top, rgba(139,61,255,0.3), transparent 40%), radial-gradient(circle at bottom right, rgba(255,77,109,0.25), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
