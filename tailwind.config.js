/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#FBFBFB",
        ReddenedEarth: "#9C6E64",
        Redwood: "#5C362D",
        RootBrew: "#2E0B05",
      },
    },
  },
  plugins: [require("daisyui")],
};
