/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    borderWidth: {
      '16': '16px',
    },
    extend: {
      colors: {
        '1': '#F0C8D3',
        '2': '#9D7ABC',
        '3': '#F0D763',
        '4': '#91BDDA',
        '5': '#86BA78',
        '6': '#D2524F',
      },
      padding: {
        'topsm': '60px',
        'topmd': '174px',
        'top': '164px',
        'topsmHome': '54px',
        'topmdHome': '168px',
        'topHome': '300px',
      },
      spacing: {
        'scrollsm': '-59px',
        'scrollmd': '-170px',
        'scrolllg': '-160px',
        'home1': '100vh',
      },
      minWidth: {
        'home': '105vw',
        'homeLg': '120vw',
      },
      minHeight: {
        'home': '105vh',
        'homeLg': '120vw',
      },
      height: {
        'zoom': '60vh',
      },
    },
  },
  plugins: [],
}
