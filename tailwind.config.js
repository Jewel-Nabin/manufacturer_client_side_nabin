module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        partExtheme: {
          primary: "#262626",
          secondary: "#FC5A34",
          accent: "#FAFAFA",
          neutral: "#2A2C3C",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
