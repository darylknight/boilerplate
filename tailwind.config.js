module.exports = {
	// The content key tells tailwind to scan all these files, to build the CSS from
	content: ['./templates/**/*', './src/**/*.{html,vue,ts,pcss,js}'],

	// Set classes here that should always be included. Freeform uses py-3 and px-3
	safelist: ['py-3', 'px-3'],

	// Adding things to the theme key overwrites tailwind's default setup - like replacing the colours
	// Use the extend key to add to the config rather than replacing it
	theme: {
		colors: {
			blue: '#336699',
			white: '#fff',
			gray: '#b8b8b8',
			black: '#000',
			transparent: 'transparent',
		},

		// You can replace the Tailwind fonts with the client's brand fonts here
		fontFamily: {
			// sans: 'avant-garde-book', // ? overrides the default font
			// bold: 'avant-garde-bold',
			// medium: 'avant-garde-medium',
		},

		extend: {
			// ? The 'extend' key adds to the config instead of replacing it
			screens: {
				// '3xl': '1690px', // ? You can extend the breakpoints here to match design
			},
		},
	},
}
