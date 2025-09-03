/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#57CC99',
        alert: '#B50003',
      },
      fontFamily: {
        gasoek: ['Gasoek One'],
        "dm-sans": ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

