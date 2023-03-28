/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto'],
        poppins: ['Poppins'],
        manrope: ['Manrope'],
      },
      boxShadow: {
        form: '0 0 60px 30px rgba(0, 0, 0, 0.03)',
        button: '0 0 14px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
