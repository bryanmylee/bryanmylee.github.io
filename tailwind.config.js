const plugin = require('tailwindcss/plugin');

const fontFamily = {
  sans: [
    'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
    'Segoe UI' ,'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif',
    'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
  ],
  mono: [
    'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas',
    'Liberation Mono', 'Courier New', 'monospace'
  ],
};

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
    aspectRatio: {
      'square': [1, 1],
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        mono: ['IBM Plex Mono', ...fontFamily.mono],
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      colors: {
        ...colors,
        accent: colors['texas-rose'],
        base: colors['shark'],
      },
      zIndex: {
        '-1': '-1',
      },
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

