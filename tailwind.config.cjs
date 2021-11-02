const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
        cyan: '#61BFCD',
        yellow: '#EBAE89',
        'dark-gray': {
          DEFAULT: '#1C1E25',
          lighter: '#242730'
        }
			},
      fontFamily: {
        mono: ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
		}
	},

	plugins: []
};

module.exports = config;
