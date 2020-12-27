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
      layout: './src/layouts/blogpost.svelte',
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

