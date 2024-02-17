/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "color-loght": "#8a8a8a",
        "main-color": "#42ad67",
        "text-clr": "#000",
        steelblue: "#1275b1",
        honeydew: "#d1f0dc",
        seagreen: "#29944d",
        dimgray: "#605d5d",
      },
      spacing: {},
      fontFamily: {
        text: "Poppins",
      },
      borderRadius: {
        "37xl": "56px",
        xl: "20px",
        lgi: "19px",
        "116xl-5": "135.5px",
        "4xs": "9px",
        "2xs": "11px",
      },
    },
    fontSize: {
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "3xl": "22px",
      "50xl-3": "69.3px",
      "23xl": "42px",
      "36xl": "55px",
      xl: "20px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "22xl": "41px",
      "6xl": "25px",
      "14xl": "33px",
      "sm-1": "13.1px",
      "7xs": "6px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      lg: {
        max: "1200px",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

