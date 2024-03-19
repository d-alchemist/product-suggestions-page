/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "Jost"
      },
      borderRadius: {
        "10": "0.625rem"
      },
      fontSize: {
        "13": "0.813rem",
      },
      colors: {
        "primary": "#4661E6",
        "light-primary": "#F2F4FF",
        "pink-primary": "#AD1FEA",
        "orange-primary": "#F49F85",
        "secondary": "#3A4374",
        "light-secondary": "#647196",
        "brown": "#373F68"
      },
    },
  },
  plugins: [],
}