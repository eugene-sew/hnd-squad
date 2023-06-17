/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        brand: "#fd5564",
        cta: "#fe3c72",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          brand: "#fd5564",
          cta: "#fe3c72",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
