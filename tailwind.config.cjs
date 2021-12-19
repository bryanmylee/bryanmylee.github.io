const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				cyan: {
					DEFAULT: '#61bfcd',
					dark: '#305d63',
				},
				yellow: {
					DEFAULT: '#ebae89',
				},
				shade: {
					dark: '#1c1e25',
					DEFAULT: '#242730',
					light: '#3f424d',
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
