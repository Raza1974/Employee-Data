import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Pages
    "./components/**/*.{js,ts,jsx,tsx}",  // Components
    "./app/**/*.{js,ts,jsx,tsx}",  // For Next.js app directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
