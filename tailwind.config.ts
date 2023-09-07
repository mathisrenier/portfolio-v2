import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-soehne-halbfett)",
          "Arial",
          "-apple-system",
          "blinkmacsystemfont",
          "Segoe UI",
          "roboto",
          "Helvetica Neue",
          "arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
