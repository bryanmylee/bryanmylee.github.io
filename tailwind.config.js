const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
  ],
  theme: {
    aspectRatio: {
      'square': [1, 1],
    },
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'texas-rose': {
          DEFAULT: 'rgba(255, 177, 85, 1)',
        },
        shark: {
          DEFAULT: 'rgba(26, 39, 40, 1)',
        },
        'outer-space': {
          DEFAULT: 'rgba(36, 50, 51, 1)',
        },
        get accent() {
          return this['texas-rose'];
        },
        get base() {
          return this['shark'];
        },
      },
      zIndex: {
        '-1': '-1',
      },
      minWidth: theme => theme('width'),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['before'],
      display: ['before'],
      inset: ['before'],
      position: ['before'],
      width: ['before'],
    },
    aspectRatio: ['before'],
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-aspect-ratio'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.empty-content': {
          content: "''",
        },
      }, ['before']);
    }),
  ],
};

