/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        accent: "#8B5CF6",
        danger: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
        success: "#10B981",
      }
    },
  },
  plugins: [],
} 