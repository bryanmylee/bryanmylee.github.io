const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
  postcss: {
    plugins: [
      require('postcss-import')(),
      require('postcss-nested')(),
    ]
  },
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
};

