## Why Tailwind CSS?

### A constrained design system is a good thing

Although Svelte offers scoped CSS by default, Tailwind CSS is still useful as it offers a nicely constrained design system. As the number of components grows, it becomes increasingly difficult to keep all whitespacing, font-sizes, and colours consistent. Tailwind CSS solves these issues by providing sensible defaults for many CSS variables, and minimises the usage of magic numbers.

### Styling custom components

In addition, Svelte does not support passing CSS classes into child components. For example, we cannot do this...

```html
<!-- Parent.svelte -->
<style>
  .margin-lg {    // unused class warning
    margin: 1rem;
  }
</style>

<ChildCard class="margin-lg"/>
```

... as the `.margin-lg` class is treated as an unused CSS class, and is purged in the compiled application.

This makes it extremely difficult to design flexible components that depend on layout and more.

Since Tailwind CSS classes are global by default and not purged by Svelte, we can use Tailwind to enable this functionality.

```html
<!-- Parent.svelte -->
<ChildCard class="m-4"/>


<!-- ChildCard.svelte -->
<script lang="ts">
  export { className as class }; // exports a prop 'class'
  let className: string = "";
</script>

<div class={className}/>
```

The `div` element in `ChildCard.svelte` will be built with the `m-4` class, which will inherit styles from Tailwind CSS.

## Integrating Tailwind CSS

To add Tailwind CSS to Svelte and Sapper, we first have to integrate PostCSS into Sapper's build step, as Tailwind CSS is a PostCSS plugin.

### Install dependencies

First, we have to install a few extra dependencies.

```bash
npm install -D autoprefixer postcss-load-config \
postcss-cli postcss-import postcss-nested cssnano \
tailwindcss npm-run-all
```

`postcss-load-config` allows us to automatically load the `postcss.config.js` file in our project root if it exists, thus saving us some extra configuration required to integrate PostCSS into our build step.

`postcss-cli` allows us to run PostCSS from the command line.

`postcss-import` and `postcss-nested` are additional quality-of-life plugins.

`cssnano` minifies our CSS output.

`npm-run-all` is a tool to run multiple npm scripts in parallel.

### Initialise Tailwind CSS

Create the Tailwind configuration file with...

```bash
npx tailwind init
```

We then have to include Svelte into the PurgeCSS block to ensure that Svelte styles are not removed.

```javascript
module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

Instead of configuring `static/global.css` manually, we will set up PostCSS to transpile a source CSS file into a static CSS file to be used.

Create an asset `/src/assets/global.css`, and import Tailwind CSS styles.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Configure PostCSS with `svelte-preprocess`

In the root of our project, create `postcss.config.js`, and load our PostCSS plugins.

```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
```

`postcss-import` and `postcss-nested` introduce some additional syntax that needs to be handled manually.

To do so, we use `svelte-preprocess`. The preprocessor allows us to apply modifications to the code before it is passed into the Svelte engine.

First, create our preprocessor options object under `svelte.config.js`...

```javascript
const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
  postcss: {
    plugins: [
      require('postcss-import')(),
      require('postcss-nested')(),
    ],
  },
};
```

`svelte.config.js` is used to configure our language server, such that the Svelte extension for VSCode and coc knows how to parse our source code and provide proper syntax highlighting and error messages.

To enable the preprocessor for the language server, simply export  a `preprocess` object from `svelte.config.js`.

```javascript
module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
};
```

We also export the options object, since we want to use the same configuration for our build step under `rollup.config.js` or `webpack.config.js`.

For Rollup, add `preprocess` to the `svelte` object for both the client and server...

```javascript
const preprocess = sveltePreprocess({
  sourceMap: dev,       // additional preprocess option
  ...preprocessOptions,
});

client: {
  ...
  plugins: [
    ...
    svelte({
      preprocess,
      dev,
      ...
},

server: {
  ...
  plugins: [
    ...
    svelte({
      preprocess,
      generate: 'ssr',
      ...
}
```

For Webpack, add `preprocess` to the `/\\.(svelte|html)$/` rule for both the client and server...

```javascript
client: {
  ...
    module: {
      rules: [
        {
          test: /\\.(svelte|html)$/,
          use: {
            options: {
              preprocess,
              ...
},

server: {
  ...
    module: {
      rules: [
        {
          test: /\\.(svelte|html)$/,
          use: {
            options: {
              preprocess,
              ...
},
```

### Adjust npm scripts

After setting up the configurations, we need to run two compilation steps for our project: one to compile the Svelte code into native Javascript, and one to compile PostCSS and apply our plugins, including Tailwind CSS.

To do so, we use `npm-run-all` to simultaneously watch for changes and incrementally compile the necessary files for both compilation steps.

We also add the PostCSS compilation step to our build step. In `package.json`...

```json
"scripts": {
  "dev": "run-p watch:css watch:sapper",
  "watch:css": "postcss src/assets/global.css -o static/global.css -w",
  "watch:sapper": "sapper dev",
  "build": "run-s build:css build:sapper",
  "build:css": "NODE_ENV=production postcss src/assets/global.css -o static/global.css",
  "build:sapper": "NODE_ENV=production sapper build",
},
```

Now you should be able to use Tailwind CSS in your Sapper project!
