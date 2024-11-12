/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'serif'],
    },
    extend: {
      colors: {
        'green': '#2B8761',
        'green-dark': '#25794E',
      },
      animation: {
        'bounce-up': 'bounceUp 4s ease-in-out infinite', // 4-second interval for the bounce
      },
      keyframes: {
        bounceUp: {
          '0%': { transform: 'translateY(0)' },         // Start at original position
          '50%': { transform: 'translateY(-50px)' },    // Move up by 50px at the middle
          '100%': { transform: 'translateY(0)' },       // Return to original position
        },
      },
    },
  },
  plugins: [],
}
