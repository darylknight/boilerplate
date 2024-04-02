module.exports = {
	// The content key tells tailwind to scan all these files, to build the CSS from
	content: ['./templates/**/*', './src/**/*.{html,vue,ts,pcss,js}'],

	// Set classes here that should always be included. Freeform uses py-3 and px-3
	safelist: ['py-3', 'px-3'],

	// Adding things to the theme key overwrites tailwind's default setup - like replacing the colours
	// Use the extend key to add to the config rather than replacing it
	theme: {
		// colors: {
		// 	red: '#b91c1c', // form error
		// 	green: '#15803d', // form success
		// 	blue: '#369',
		// 	white: '#fff',

		// 	gray: {
		// 		200: '#e5e7eb',
		// 		300: '#d1d5db',
		// 		500: '#6b7280',
		// 		700: '#374151',
		// 		900: '#111827',
		// 	},

		// 	black: '#000',
		// 	transparent: 'transparent',
		// 	inherit: 'inherit',
		// },

		// You can replace the Tailwind fonts with the client's brand fonts here
		fontFamily: {
			sans: 'Unbounded', // ? overrides the default font
			// bold: 'avant-garde-bold',
		},

		// Screen sizes straight from Tailwind, for reference
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
