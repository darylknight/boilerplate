import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default ({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',
	build: {
		manifest: true,
		outDir: 'web/dist/',
		rollupOptions: {
			input: {
				app: 'src/js/app.js',
			},
			output: {
				sourcemap: true,
			},
		},
	},
	// The restart plugin allows Vite to refresh pages when Twig files change
	plugins: [
		ViteRestart({
			reload: ['templates/**/*'],
		}),
	],
	// https://nystudio107.com/docs/vite/#using-ddev
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
})
