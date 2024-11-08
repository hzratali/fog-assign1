/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        md: "640px",
        lg: "1024px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%), linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%)",
        "gradient-black-gray":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 73.01%, rgba(15, 15, 15, 0.6) 73.01%), linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%)",
      },
    },
  },
  plugins: [],
};


