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
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['IBM Plex Mono', 'ui-monospace'],
      },
      colors: {
        ...colors,
        accent: colors['texas-rose'],
        base: colors['shark'],
        'card-base': colors['outer-space'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

