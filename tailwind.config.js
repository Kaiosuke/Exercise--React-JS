/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        second: "#374151",
        "text-second": "#9ca3af",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
