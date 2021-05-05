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
          lighter: '#242730',
        },
      }
    }
  },
  plugins: []
};
