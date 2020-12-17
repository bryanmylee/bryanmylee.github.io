const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  () => {
    console.log('Deploy complete!');
  }
);

