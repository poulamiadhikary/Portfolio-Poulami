/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": "Montserrat",
        DavineGerian: ['DavineGerian', 'sans'],
        Sinosans: ['Sinosans', 'sans'],
        CsReplika: ['CsReplika', 'sans'],
        CsRobert: ['CsRobert', 'sans'],
        CsRomina: ['CsRomina', 'sans'],
      }
    },
  },
  plugins: [require('tailwindcss-motion')], 
}

