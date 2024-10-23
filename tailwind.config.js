/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    colors: {
      cyan: {
        300: "#8fe3f9",
        400: "#71c0d4",
        600: "#4d96a9",
      },
      purple: {
        300: "#d9b8ff",
        400: "#b18bdd",
        600: "#855fb1",
      },
      slate: {
        300: "#d1d1df",
        600: "#87879d",
        900: "#28283d",
      },
      white: "#fafafa",
    },
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      fontSize: {
        "mobile-1": ["40px", { lineHeight: "110%", fontWeight: 900 }],
        "mobile-2": ["32px", { lineHeight: "110%", fontWeight: 900 }],
        "mobile-3": ["12px", { lineHeight: "110%", fontWeight: 900 }],
        "mobile-4": ["16px", { lineHeight: "150%", fontWeight: 500 }],
        "mobile-5": ["16px", { lineHeight: "150%", fontWeight: 900 }],
        "tablet-1": ["48px", { lineHeight: "110%", fontWeight: 900 }],
        "tablet-2": ["36px", { lineHeight: "110%", fontWeight: 900 }],
        "tablet-3": ["14px", { lineHeight: "110%", fontWeight: 900 }],
        "desktop-1": ["64px", { lineHeight: "110%", fontWeight: 900 }],
        "desktop-2": ["40px", { lineHeight: "110%", fontWeight: 900 }],
        "desktop-3": ["16px", { lineHeight: "110%", fontWeight: 900 }],
        "desktop-4": ["18px", { lineHeight: "150%", fontWeight: 500 }],
      },
    },
  },
  plugins: [],
};
