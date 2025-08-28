import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0057B7",
        secondary: "#4B4B4B",
        accent: "#2ECC71",
        bg: "#FFFFFF",
        text: "#111827"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};
export default config;