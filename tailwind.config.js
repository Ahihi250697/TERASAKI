module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          custom1: '#2e6fef',
          custom2: '#edf4f4'
        },
        colour: {
          1: '#e5ebeb'
        }
      },
      fontSize: {
        'nor': '1.6rem',
        'lv4': '4rem',
        'lv2': '2rem',
        'lv3': '3rem'
      },
      fontFamily: {
        'en': ['Oswald', 'sans-serif'],
        'jp': ['Noto Sans JP', 'sans-serif']
      },
      spacing: {
        'lv1_6': '16px',
        'lv13': '130px',
        'lv12': '120px',
        'lv12_5': '125px',
        'lv11_5': '115px'
      },
      maxWidth: {
        'half': '50%'
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
