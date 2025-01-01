import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1440px",
        desktop: "1920px",
      },
      colors: {
        "primary-50": "#FFD500",
        "primary-55": "#FFD81A",
        "primary-70": "#FFE566",
        "primary-80": "#FFEE99",
        "primary-90": "#FFF6CC",
        "primary-95": "#FFFAE5",
        "primary-97": "#FFFCF0",
        "primary-99": "#FFFEFA",
        "light-90": "#E4E4E7",
        "light-95": "#F1F1F3",
        "light-97": "#F7F7F8",
        "light-99": "#FCFCFD",
        "grey-10": "#1A1A1A",
        "grey-15": "#262626",
        "grey-20": "#333333",
        "grey-30": "#4C4C4D",
        "grey-35": "#59595A",
        "grey-40": "#656567",
        "grey-60": "#98989A",
        "grey-70": "#B3B3B3",
      },
    },
  },
  plugins: [],
} satisfies Config;