const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    dest: 'docs',
    repo: 'git@github.com:bryanmylee/website.git',
    user: {
      name: 'bryanmylee',
      email: 'bryanmylee@gmail.com',
    },
  },
  () => {
    console.log('Deploy complete!');
  }
);

