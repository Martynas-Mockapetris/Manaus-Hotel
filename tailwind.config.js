import withMT from '@material-tailwind/react/utils/withMT.js';

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenDark: '#16302D',
        greenLight: '#50C557',
        textWhite: '#EFF1EC',
        textGreen: '#D3F2DB',
        buttonBG: '#50C5576B',
        transparentBG: 'rgba(0, 0, 0, 0.1);'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem'
        }
      }
    },
    fontFamily: {
      text: 'Roboto, serif',
      body: 'Krona One, sans-serif'
    }
  },
  plugins: []
});
