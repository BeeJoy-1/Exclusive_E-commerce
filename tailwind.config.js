/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_color: "var( --white_color)",
        white_F5F5F5: "var( --white_F5F5F5)",
        white_FEFAF1: "var( --white_FEFAF1)",
        white_FFFFFF: "var( --white_FFFFFF)",
        black_738: "var( --black_738)",
        text_whiteFAFAFA: "var( --text_whiteFAFAFA)",
        text_gray7D8184: "var( --text_gray7D8184)",
        text_black000000: "var( --text_black000000)",
        text_reddb4444: "var( --text_reddb4444)",
        hover_buttona0bce0: "var( --hover_buttona0bce0)",
        button_green00ff66: "var( --button_green00ff66)",
        hover_buttona0bce0: "var( --hover_buttona0bce0)",
      },
    },
    fontFamily: {
      poppins: "var(--poppins)",
      Inter: "var(--Inter)",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "1rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
