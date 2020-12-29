const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const chroma = require('chroma-js');

const color = (base) => ({
  DEFAULT: base,
  lighter: chroma(base).brighten().css(),
  darker: chroma(base).darken(0.5).css(),
  '75': chroma(base).alpha(0.75).css(),
});

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
        'cranberry': color('#D86079'),
        'downy': color('#61BFCD'),
        'gold-sand': color('#EBAE89'),
        'charade': color('#242730'),
        'shark': color('#1C1E25'),
        get accent() {
          return this['gold-sand'];
        },
        get base() {
          return this['shark'];
        },
      },
      zIndex: {
        '-1': '-1',
      },
      minWidth: theme => theme('width'),
      minHeight: theme => theme('height'),
      typography: theme => ({
        DEFAULT: {
          css: {
            color: 'white',
            h1: { color: 'white' },
            h2: { color: 'white' },
            h3: { color: 'white' },
            h4: { color: 'white' },
            p: {
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.3'),
            },
            a: {
              color: theme('colors.accent.DEFAULT'),
            },
            strong: {
              color: theme('colors.accent.DEFAULT'),
            },
            li: {
              marginBottom: '0',
            },
          },
        },
      }),
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
    require('@tailwindcss/typography'),
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

