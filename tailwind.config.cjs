/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112B3C",
        secodary: "#205375",
        highlights: "#F66B0E",
      },
    },
    animation: {
      fade: "fadeOut 1.5s ease-in-out infinite",
      pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },

    // that is actual animation
    keyframes: (theme) => ({
      fadeOut: {
        "0%": { color: theme("colors.highlights") },
        "100%": { color: theme("colors.transparent") },
      },
      pulse: {
        "0%": { opacity: 1 },
        "100%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0.5,
        },
      },
    }),
  },
  plugins: [],
};
