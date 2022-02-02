let mix = require('laravel-mix');
const baseUrl = process.env.PRIMARY_SITE_URL; // Get value from .env to use as Browsersync proxy URL

mix.setPublicPath('./public/dist')

	.combine(
		[
			'node_modules/lazysizes/lazysizes.js', // Used for lazy loading images
		],
		'public/dist/js/vendor.js'
	)

	.js('src/js/app.js', 'public/dist/js')
	.postCss('src/pcss/app.pcss', 'public/dist/css', [require('tailwindcss')])

	.browserSync({
		files: ['public/dist/css/*', 'public/dist/js/*', 'templates/**/*'], // BrowserSync will refresh every time one of these files changes
		proxy: baseUrl, // This takes PRIMARY_SITE_URL from the .env file so devs can have different local URLs
		notify: false,
	})

	.version()
	.disableNotifications();
