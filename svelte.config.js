const sveltePreprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex');

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
    mdsvex({
      extension: '.mdx',
    }),
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

