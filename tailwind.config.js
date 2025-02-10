module.exports = {
	// Adding things to the theme key overwrites tailwind's default setup - like replacing the colours
	// Use the extend key to add to the config rather than replacing it
	theme: {
		// You can replace the Tailwind fonts with the client's brand fonts here
		fontFamily: {
			sans: 'Unbounded', // ? overrides the default font
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
