/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          50: '#f7f7f7',
          100: '#e1e1e1',
          200: '#cfcfcf',
          300: '#b1b1b1',
          400: '#9e9e9e',
          500: '#7e7e7e',
          600: '#626262',
          700: '#515151',
          800: '#3b3b3b',
          900: '#222222',
        },
      },
    },
  },
  plugins: [],
};
