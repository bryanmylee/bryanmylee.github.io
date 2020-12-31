const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const prodPlugins = [
  require('cssnano')({
    preset: 'default',
  }),
];

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    ...(dev ? [] : prodPlugins),
  ],
};

