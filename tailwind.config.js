const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./**/*.html'],
  // prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          custom1: '#2e6fef',
          custom2: '#edf4f4',
          custom3: '#1f62c8',
          option1: '#009eff',
          option2: '#0f8ea1',
          option3: '#00736d',
          option4: '#0f55a1',
          // option5: '#00736d'
        },
        green: {
          custom1: '#edf4f4',
          option1: '#9e9e12',
          option2: '#59c299',
          // option3: '#535353'
        },
        colour: {
          1: '#e5ebeb'
        },
        grey: {
          'option1': '#6e6e6e',
          'option2': '#eeeeee',
          'option3': '#e5ebeb',
          'option4': '#636363',
          'option5': '#535353',
          'option6': '#cccccc',
          'option7': '#333333',
          'option8': '#d8d8d8',
          'option9': '#b2b2b2',
          'option10': '#e8e8e8'
        },
        orange: {
          'option1': '#db9526'
        },
        pink: {
          'option1': '#eb6877'
        }
      },
      fontSize: {
        'nor': '1.6rem',
        'lv4': '4rem',
        'lv3': '3rem',
        'lv3_1': '3.1rem',
        'lv2': '2rem',
        'lv2_4': '2.4rem',
        'lv1_8': '1.8rem',
        //****** */
        '1ty3': '1.3rem',
        'default': '1.6rem',
        '1ty8': '1.8rem',
        '2ty': '2rem',
        '2ty4': '2.4rem',
        '2ty5': '2.5rem',
        '2ty6': '2.6rem',
        '2ty8': '2.8rem',
        '2ty9': '2.9rem',
        '3ty': '3rem',
        '3ty1': '3.1rem',
        '3ty3': '3.3rem',
        '3ty5': '3.5rem',
        '4ty': '4rem',
        '4ty5': '4.5rem',
        '5ty': '5rem',
        '5ty3': '5.3rem',
        '5ty8': '5.8rem',
        '6ty5': '6.5rem',
        '6ty6': '6.6rem',
        '6ty7': '6.7rem',
        '7ty': '7rem',
        '8ty2': '8.2rem',
        '8ty5': '8.5rem',
        'vw3_1': 'clamp(2rem, 2.5vw, 3.1rem)',
        'vw3': 'clamp(2rem, 2.5vw, 3rem)'
      },
      fontFamily: {
        'en': ['Oswald', 'sans-serif'],
        'jp': ['Noto Sans JP', 'sans-serif']
      },
      spacing: {
        'lv0_7': '7px',
        'lv1_6': '16px',
        'lv2': '20px',
        'lv2_5': '25px',
        'lv3': '30px',
        'lv3_5': '35px',
        'lv5': '50px',
        'lv4': '40px',
        'lv4_5': '45px',
        'lv6': '60px',
        'lv6_5': '65px',
        'lv7': '70px',
        'lv7_5': '75px',
        '8lv': '80px',
        'lv8_5': '85px',
        'lv10': '100px',
        'lv11': '110px',
        'lv11_5': '115px',
        'lv12': '120px',
        'lv12_5': '125px',
        'lv13': '130px',
        'lv14': '140px',
        'lv14_5': '145px',
        'lv16': '160px',
        'lv27': '270px',
        //******* */
        '1p': '1px',
        '2p': '2px',
        '5p': '5px',
        '3p': '3px',
        '7p': '7px',
        '1ty': '10px',
        '1ty2': '12px',
        '1ty5': '15px',
        '1ty8': '18px',
        '2ty': '20px',
        '2ty5': '25px',
        '3ty': '30px',
        '3ty5': '35px',
        '4ty': '40px',
        '4ty5': '45px',
        '5ty': '50px',
        '6ty': '60px',
        '6ty5': '65px',
        '7ty': '70px',
        '7ty5': '75px',
        '8ty': '80px',
        '8ty5': '85px',
        '1h': '100px',
        '1h05': '105px',
        '1h10': '110px',
        '1h40': '140px',
        '2h': '200px',
        '2h30': '230px',
        '2h50': '250px',
        '2h75': '275px',
        '2h65': '265px',
        '3h10': '310px',
        '3h50': '350px',
        '4h10': '410px',
        '5h40': '540px',
        '5h45': '545px',
        '8h30': '830px',
        'calc-1ty5': 'calc(100% - 15px)',
        'calc-3ty': 'calc(100% - 30px)' 
      },
      maxWidth: {
        '260': '260px',
        '500': '500px',
        '520': '520px',
        '545': '545px',
        '530': '530px',
        '565': '565px',
        '512': '512px',
        '600': '600px',
        '640': '640px',
        '680': '680px',
        '730': '730px',
        '755': '755px',
        '835': '855px',
        '900': '900px',
        '920': '920px',
        '128lv': '1280px',
        '122lv': '1220px',
        '132lv': '1320px',
        'half': '50%',
        'calc3': 'calc(100%/3)',
        'calc2-1': 'calc(50% - 1px)',
        'calc2_1': 'calc(50% + 1px)',
        'calc2_40': 'calc(50% + 40px)',
        'calc2-40': 'calc(50% - 40px)',
        'calc2_70': 'calc(50% + 70px)',
        'calc2_100': 'calc(50% + 100px)',
        'calc2_170': 'calc(50% + 170px)',
        'calc2_260': 'calc(50% + 260px)',
        'calc2_6h': 'calc(50% + 600px)',
        'calc2_6h2': 'calc(50% + 620px)',
        //******* */
        '1h50': '150px',
        '2h': '200px',
        '3h50': '350px',
        '4h': '400px',
        '4h50': '450px',
        '4h60': '460px',
        '4h80': '480px',
        '5h10': '510px',
        '9h15': '915px',
        '6h50': '650px',
        '1th': '1000px',
        '1th1h5': '1150px',
        '1th2h': '1200px',
        'calc2_2ty': 'calc(50% + 20px)',
      },
      height: {
        'lv1': '10px',
        'lv1_2': '12px',
        'lv6_5': '65px',
        'lv30': '300px',
        '1p': '1px',
        '5h': '500px',
        '6h': '600px',
        'calc-175': 'calc(100% - 175px)',
        'calc-6ty': 'calc(100% - 60px)',
        'calc-2ty': 'calc(100% - 20px)'
      },
      // width: {

      // },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4'
      },
      borderWidth: {
        '3': '3px',
        '12': '12px',
        '22': '22px'
      },
      inset: {
        '-lv2': '-20px',
        '2ty': '20px',
        '-2ty2': '-22px',
        '2ty5': '25px',
        '4ty': '40px',
        '-5ty5': '-55px',
        '6ty': '60px',
        '-1h20': '-120px',
        '1h25': '125px',
        '-1h85': '-185px'
      },
      lineHeight: {
        '1lv7': '1.7',
        '1lv8': '1.8',
        '1lv9': '1.9',
        '45': '45px'
      },
      borderRadius: {
        '3ty': '30px'
      },
      flexShrink: {
        '1lv5': 1.5,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6
      },
      skew: {
        '45': '45deg'
      },
      backgroundPosition:{
        'custom_right': '70% center'
      },
      gridTemplateColumns: {
        '121fr': '1fr 2fr 1fr',
        '31fr': '3fr 1fr'
      },
      backgroundImage: theme => ({
        'female': "url('../images/top/img_female.jpg')",
        'mv': "url('../images/top/img_mv.jpg')",
        'mesBg': "url('../images/message/img_photo4.jpg')"
      })
    },
    screens: {
      'tl': {'max': '1023px'},
      'mb': {'max': '767px'},
      
    },
  },
  variants: {
    extend: {
      margin: ['last', 'first', 'odd', 'even']
    },
    container: false,
    important: true
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@neojp/tailwindcss-important-variant'),
    plugin(function({ addComponents }) {
      const containerOuter = {
        '.container-ot': {
            maxWidth: '1240px',
            padding: '0px 20px',
            width: '100%',
            margin: '0px auto'
        }
      }
      addComponents(containerOuter);
    }),
    plugin(function({ addComponents }) {
      const arrowBorder = {
        '.tw-arrowBorder': {
          width: '0',
          height: '0',
          borderTop: '12px solid transparent',
          borderRight: '22px solid #edf4f4',
          borderBottom: '12px solid transparent'
        }
      }
      addComponents(arrowBorder);
    })
  ]
}
