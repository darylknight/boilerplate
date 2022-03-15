module.exports = {
	content: ["./templates/**/*.twig", "./src/**/*.{html,vue,ts,pcss,js}"],
	theme: {
		colors: {
			// Add brand colours here
			white: "#fff",
			black: "#000",
			transparent: "transparent",
			primary: "#369",
		},
		container: {
			center: true, // ? always centre containers
		},
	},
};
