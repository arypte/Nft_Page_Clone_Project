/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'screen-128': '500px',
      },

      colors: {
        main: '#C44FEB',
      },
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
