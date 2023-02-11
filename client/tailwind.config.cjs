/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      padding: {
        'topsm': '60px',
        'topmd': '174px',
        'top': '164px',
        'topsmHome': '54px',
        'topmdHome': '168px',
        'topHome': '300px',
      },
      spacing: {
        'scrollsm': '-50px',
        'scrollmd': '-170px',
        'scrolllg': '-190px',
        'home1': '100vh',
      },
      minWidth: {
        'home': '105vw',
      },
      minHeight: {
        'home': '105vh',
      },
    },
  },
  plugins: [],
}
