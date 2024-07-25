/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      // Customize datepicker styles
      // For example, change the background color, text color, and border color
      'react-datepicker': {
        backgroundColor: 'black-500',
        textColor: 'white',
        borderColor: 'blue-700',
      },
    },
  },
  plugins: [],
} 


