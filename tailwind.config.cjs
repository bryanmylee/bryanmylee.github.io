const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        cyan: '#61BFCD',
        yellow: '#EBAE89',
        base: {
          DEFAULT: '#1C1E25',
          lighter: '#242730'
        }
      }
    }
  },
  plugins: []
};
