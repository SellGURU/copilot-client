/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
			colors:  {

				"primary-color":  "",

				"secondary-color":  "#E8E1DA",

				"soft-color":  "#86929E",

				"red-color":  "#FF3E5D",
				"orange-color":  "#FC8F2B",
				"purple-color":  "#873FEF",
				"blue-color":  "#62CFD8",

			},
      fontFamily: {
        'poppins' :['Poppins']
      }
    },
  },
  plugins: [],
}