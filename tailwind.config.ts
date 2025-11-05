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
          DEFAULT: "#6B46C1",
          dark: "#5B3A9E",
        },
        purple: {
          50: "#F3E8FF",
          100: "#E9D5FF",
          200: "#D8B4FE",
          300: "#C084FC",
          400: "#A855F7",
          500: "#9333EA",
          600: "#7E22CE",
          700: "#6B46C1",
          800: "#5B3A9E",
          900: "#4C1D95",
        },
      },
      fontFamily: {
        iran_reg: ['iran_reg'],
        iran_bold: ['iran_bold'],
        iran_light: ['iran_light'],
        iran_med: ['iran_med'],
        iran_xbold: ['iran_xbold'],
        num_light: ['num_light'],
        num_bold: ['num_bold'],
        en: ['custom_en'],
        iran_kalame_bold: ['kalame_bold'],
        iran_kalame_black: ['kalame_black'],
        iran_kalame_reg: ['kalame_reg'],
        iran_kalame_thin: ['kalame_thin'],
        
      },
    },
  },
  plugins: [],
};

export default config;

