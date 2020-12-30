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
  purge: {
    enabled: true,
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
    ],
    options: {
      defaultExtractor: content => {
        const tokens = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        return tokens.map(m => {
          if (!m.startsWith('class:')) return m;
          const equalIndex = m.indexOf('=');
          if (equalIndex !== -1) return m.slice(6, equalIndex);
          const slashIndex = m.indexOf('/');
          if (slashIndex !== -1) return m.slice(6, slashIndex);
          return m.slice(6);
        });
      },
    },
  },
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
        get primary() {
          return this['gold-sand'];
        },
        get secondary() {
          return this['downy'];
        },
        get base() {
          return this['shark'];
        },
        get red() {
          return this['cranberry'];
        },
        get cyan() {
          return this['downy'];
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
              color: theme('colors.primary.DEFAULT'),
            },
            strong: {
              color: theme('colors.primary.DEFAULT'),
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

