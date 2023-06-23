module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
      },
      spacing: {
        '4vw': '4vw',
        '6vh': '6vh',
      },
      gridTemplateColumns: {
        "grid-column":
          "[container-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 10rem) [col-end]) [center-end] 1fr [container-end]",
      },
      gridTemplateRows: {
        'grid-rows': '100vh repeat(11, min-content)',
      },
      colors: {
        'primary': '#5a5af3',
        'primary-m': '#ced3fc',
        'resi-grey': '#eeeef5',
        'resi-white': '#ffffff',
        'resi-darkblue': '#434175',
      },
    },
  },
  plugins: [],
};
