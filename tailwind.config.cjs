const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyan: '#61BFCD',
        yellow: '#EBAE89',
        base: {
          DEFAULT: '#1C1E25',
          lighter: '#242730'
        }
      },
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  plugins: []
};
