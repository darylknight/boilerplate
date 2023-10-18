module.exports = {
	// The content key tells tailwind to scan all these files, to build the CSS from
	content: ['./templates/**/*', './src/**/*.{html,vue,ts,pcss,js}'],

	// Set classes here that should always be included. Freeform uses py-3 and px-3
	safelist: ['py-3', 'px-3'],

	// Adding things to the theme key overwrites tailwind's default setup - like replacing the colours
	// Use the extend key to add to the config rather than replacing it
	theme: {
		colors: {
			red: '#dc2626', // form error
			blue: '#369',
			white: '#fff',

			gray: {
				DEFAULT: '#666',
				light: '#eee',
				dark: '#444',
			},

			black: '#000',
			transparent: 'transparent',
		},

		// You can replace the Tailwind fonts with the client's brand fonts here
		fontFamily: {
			// sans: 'avant-garde-book', // ? overrides the default font
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
}
