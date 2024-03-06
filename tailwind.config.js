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

        "darkText-color":  "#253343",
				"soft-color":  "#86929E",

				"red-color":  "#FF3E5D",
				"orange-color":  "#FC8F2B",
				"purple-color":  "#873FEF",
				"blue-color":  "#62CFD8",
        "green-color": "#DFFDDD",
        "darkgreen-color": "#008000",


			},
      fontFamily: {
        'poppins' :['Poppins']
      }
    },
  },
  plugins: [],
}