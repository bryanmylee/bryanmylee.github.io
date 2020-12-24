const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const colors = {
  'texas-rose': {
    DEFAULT: 'rgba(255, 177, 85, 1)',
  },
  shark: {
    DEFAULT: 'rgba(26, 39, 40, 1)',
  },
  'outer-space': {
    DEFAULT: 'rgba(36, 50, 51, 1)',
  },
};

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
        ...colors,
        accent: colors['texas-rose'],
        base: colors['shark'],
      },
      zIndex: {
        '-1': '-1',
      },
      minWidth: theme => theme('width'),
    },
  },
  variants: {
    extend: {
      display: ['before', 'responsive'],
    },
    aspectRatio: ['before', 'responsive'],
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

