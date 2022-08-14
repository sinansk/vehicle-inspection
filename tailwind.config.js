const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#345CA8",

          secondary: "#212529",

          accent: "#22d3ee",

          neutral: "#3B8BC4",

          "base-100": "#345CA8",

          info: "#1e40af",

          success: "#16A249",

          warning: "#DB7706",

          error: "#DC2828",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
