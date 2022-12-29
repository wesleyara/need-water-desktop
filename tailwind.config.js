/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    display: ["Poppins", "system-ui", "sans-serif"],
    body: ["Poppins", "system-ui", "sans-serif"],
    extend: {
      colors: {
        cerulean: {
          50: "#eff9ff",
          100: "#def3ff",
          200: "#b6e8ff",
          300: "#75d9ff",
          400: "#2cc6ff",
          500: "#00b1fa",
          600: "#008cd4",
          700: "#006fab",
          800: "#005e8d",
          900: "#064e74",
        },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          xl: "0rem",
        },
      },
    },
  },
  plugins: [],
};
