/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1B5C58",
        secondary: "#429690",
        accent: "#10B981",
        background: "#F3F4F6",
        text: "#111827",
        border: "#D1D5DB",
      }
    },
  },
  plugins: [],
};