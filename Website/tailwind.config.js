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
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeFromBlack: {
          '0%': { 
            opacity: '1',
            filter: 'brightness(0) contrast(1)'
          },
          '50%': { 
            opacity: '1',
            filter: 'brightness(0.5) contrast(1.2)'
          },
          '100%': { 
            opacity: '1',
            filter: 'brightness(1) contrast(1)'
          },
        }
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
        'fade-from-black': 'fadeFromBlack 2s ease-out',
      }
    },
  },
  plugins: [],
} 