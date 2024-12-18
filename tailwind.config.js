/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#3490dc' },  // Start and end with blue
          '50%': { color: '#ff6b6b' },      // Midway change to red
        },
      },
      animation: {
        'color-change': 'colorChange 3s ease-in-out infinite',
      },
    },
  },
  keyframes: {
    colorChange: {
      '0%, 100%': { color: '#3490dc' },  // Start and end with blue
      '50%': { color: '#ff6b6b' },      // Midway change to red
    },
    spin360: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  animation: {
    'color-change': 'colorChange 3s ease-in-out infinite',
    'spin-360': 'spin360 0.5s ease-in-out forwards',
  },
};