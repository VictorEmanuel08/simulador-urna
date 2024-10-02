/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "html, body": {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
      });
    },
    require("@tailwindcss/forms"),
  ],
};
