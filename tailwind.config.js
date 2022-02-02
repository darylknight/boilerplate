module.exports = {
	content: ['./templates/**/*.twig', './src/**/*.{html,vue,ts,pcss,js}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
