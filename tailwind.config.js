/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xxs: "200px",
        xs: "480px",
        sm: "640px",
        md: "900px",
        lg: "1000px",
        xl: "1300px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "index": '#405061',
        "success-500": "#63B017",
        "error-500": "#EA0823",
        "secondary-500": "#737F85",
        "neutral-500": "#8E989D",
        "neutral-0": "#FFFFFF",
        "neutral-200": "#C5CACC",
        "secondary-650": "#50585C",
        "primary-400": "#009DF4",
        "primary-500": "#007CC1",
        "neutral-1": "#FBFCFC",
      },
      color: {
        "success-500": "#63B017",
        "error-500": "#EA0823",
        "secondary-500": "#737F85",
        "neutral-500": "#8E989D",
        "neutral-0": "#FFFFFF",
        "neutral-200": "#C5CACC",
        "secondary-650": "#50585C",
        "primary-400": "#009DF4",
        "primary-500": "#007CC1",
        "neutral-1": "#FBFCFC",
      },

      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  fontFamily: {
    sans: ['"Open Sans"', "sans-serif"],
  },

  plugins: [],
};
