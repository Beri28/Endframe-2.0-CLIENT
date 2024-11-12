/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    xs: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "15336px",
    extend: {
      keyframes: {
        jumpIn: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '50%': { transform: 'translateY(-15px)', opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'jump-in': 'jumpIn 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

