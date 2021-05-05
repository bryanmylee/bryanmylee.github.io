import ghpages from 'gh-pages';

ghpages.publish('build', () => {
  console.log('Deploy complete!');
});
