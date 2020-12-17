const colors = {
  yellow: {
    DEFAULT: 'rgba(255, 177, 85, 1)',
  },
  solargreen: {
    DEFAULT: 'rgba(26, 39, 40, 1)',
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
        accent: colors.yellow,
        base: colors.solargreen,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

