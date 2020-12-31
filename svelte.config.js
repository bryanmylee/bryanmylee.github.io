const sveltePreprocess = require('svelte-preprocess');
const { markdown } = require('svelte-preprocess-markdown');
const hljs = require('highlight.js');

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
    markdown({
      highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
      gfm: true,
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

