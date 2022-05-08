module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'kala': '#2E2E46',
      'komola': '#F9AA4B',
      'white': '#ffffff',
    },
  },
  plugins: [require("daisyui")],
}
