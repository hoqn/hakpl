import { themeColors as myThemeColors, plugin as myPlugin } from "./src/styles/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...myThemeColors,
      }
    },
  },
  plugins: [
    myPlugin,
  ],
  darkMode: "class"
  // darkMode: [
  //   "variant",
  //   [
  //     '@media (prefers-color-scheme: dark) { &:not(.light *) }',
  //     '&:is(.dark *)',
  //   ]
  // ],
};
export default config;
