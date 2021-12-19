const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				cyan: {
					DEFAULT: '#61bfcd',
					darker: '#305d63',
				},
				yellow: {
					DEFAULT: '#EBAE89',
				},
				'dark-gray': {
					DEFAULT: '#1C1E25',
					lighter: '#242730',
				},
			},
			fontFamily: {
				mono: ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			},
			maxWidth: (theme) => theme('width'),
		},
	},

	plugins: [require('tailwindcss-extrude')],
};
