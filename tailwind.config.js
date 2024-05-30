/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGreen: '#d4f4dd',
        hoverGreen: '#a7db9b',
        softPurple: '#e0d4f4',
        hoverPurple: '#c2b6d6',
        softGray: '#e0e0e0',
        darkGray: '#333333',
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(51, 51, 51, 0.1), 0 2px 4px -1px rgba(51, 51, 51, 0.06)',
      },
      borderColor: {
        lightGreen: '#d4f4dd',
        softGray: '#e0e0e0',
        darkGray: '#333333',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
