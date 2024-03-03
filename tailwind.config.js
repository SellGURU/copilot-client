/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
			colors:  {

				"primary-color":  "#6432C9",

				"secondary-color":  "#E8E1DA",

				"soft-color":  "#86929E",

			},
      fontFamily: {
        'poppins' :['Poppins']
      }
    },
  },
  plugins: [],
}