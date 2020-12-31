const sveltePreprocess = require('svelte-preprocess');
const { markdown } = require('svelte-preprocess-markdown');

const preprocessOptions = {
  postcss: {
    plugins: [
      require('postcss-import')(),
      require('postcss-nested')(),
    ]
  },
};

function getPreprocess(dev) {
  return [
    markdown(),
    sveltePreprocess({
      sourceMap: dev,
      ...preprocessOptions
    }),
  ];
}

module.exports = {
  preprocess: getPreprocess(false),
  getPreprocess,
};

