/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {

      screens: {
        'exsm':'353px',
        'gm': '526px',
        'nm':'895px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
         
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'ButtonShadow': ' 0px 18px 40px 0px rgba(255, 110, 107, 0.30)',
        'summery': '2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        lato: ['Poppins', 'sans-serif'],
        volkhov: ['Poppins', 'sans-serif'],
        popping: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
}