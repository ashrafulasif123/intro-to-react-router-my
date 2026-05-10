import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cause: ['Cause', 'cursive']
      }
    },
  },
  plugins: [daisyui],

  // optional (but recommended)
  daisyui: {
    themes: ["light", "dark"],
  },
}
