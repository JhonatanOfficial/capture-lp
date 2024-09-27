/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FC4308",
      },
      backgroundImage: {
        "linear-grandient": "linear-gradient(to right, #323E2A, #101815)",
  
      },
      padding: {
        "x": ".5rem"
      },
      fontSize: {
        "big-text": "clamp(2rem, 15vw, 6.25rem)"
      }

    },
  },
  plugins: [],
}

