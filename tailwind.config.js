module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
      },
      boxShadow: {
        'customShadow': 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
        'trelloShadow': 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      },
      spacing: {
        '4vw': '4vw',
        '6vh': '6vh',
        'calcSvg': 'calc(26vw + 16rem)',
        '128': '30rem',
        '156': '38rem',
        '196': '45rem',
      },
      gridTemplateColumns: {
        "grid-column":
          "[container-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [container-end]",
          // '2-auto-fr': 'repeat(auto-fit, minmax(30rem, 1fr))',
        },
      gridTemplateRows: {
        'grid-rows': '100vh repeat(11, min-content)',
        'portfolio': 'repeat(13, 8vh)', 
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      colors: {
        'primary': '#5a5af3',
        'primary-m': '#ced3fc',
        'resi-grey': '#eeeef5',
        'resi-white': '#ffffff',
        'resi-darkblue': '#434175',
        'blue': '#47aeff',
        'orange': '#ffa76e',
        'red': '#ea217a',
        'turquoise': '#21ddd2',
      },
    },
  },
  plugins: [],
};
