// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	tabWidth: 3,
	semi: false,
	twigPrintWidth: 120,

	twigMultiTags: [
		"nav,endnav",
		"switch,case,default,endswitch",
		"ifchildren,endifchildren",
		"cache,endcache",
		"js,endjs",
	],

	plugins: [
		"@zackad/prettier-plugin-twig-melody",
		"prettier-plugin-tailwindcss",
	],
}

module.exports = config
