let mix = require('laravel-mix')
const baseUrl = process.env.PRIMARY_SITE_URL // Get value from .env to use as Browsersync proxy URL

mix.setPublicPath('./public/assets')

	.js('src/js/app.js', 'public/assets/js')
	.postCss('src/pcss/app.pcss', 'public/assets/css', [require('tailwindcss')])

	.browserSync({
		files: ['public/assets/css/*', 'public/assets/js/*', 'templates/**/*'], // BrowserSync will refresh every time one of these files changes
		proxy: baseUrl, // This takes PRIMARY_SITE_URL from the .env file so devs can have different local URLs
		notify: false,
	})

	.version()
	.disableNotifications()
