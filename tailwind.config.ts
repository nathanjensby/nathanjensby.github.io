import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
import type { PluginAPI } from "tailwindcss/types/config";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
          '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
          '100%': { transform: 'translate(0%,150%) skewX(0deg)' },
        },
      },
      animation: {
        fall: 'fall 5s ease infinite',
      },      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
],
};
export default config;
