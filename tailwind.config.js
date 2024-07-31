/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "feet": "url('../public/feet.svg')",
      },
      colors: {
        "duck-night": "#282b41",
        "duck-pink": "#c936b7",
        "duck-red": "#ee6374",
        "duck-blue": "#8c98f3",
        "duck-green": "#65e6cd",
        "duck-yellow": "#edec91",
      },
    },
  },
 
  plugins: [],
};
