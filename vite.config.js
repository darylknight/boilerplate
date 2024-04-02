import { defineConfig } from 'vite'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	base: command === 'serve' ? '' : '/dist/',

	build: {
		emptyOutDir: true,
		manifest: true,
		outDir: 'web/dist/',
		rollupOptions: {
			input: {
				app: 'src/js/app.js',
			},
		},
	},

	plugins: [
		// The restart plugin allows Vite to refresh pages when Twig files change
		ViteRestart({
			reload: ['templates/**/*'],
		}),
	],

	// Anything in publicDir will be copied into web/dist during `npm run build`
	publicDir: './src/public',

	// https://nystudio107.com/docs/vite/#using-ddev
	server: {
		fs: {
			strict: false,
		},
		host: '0.0.0.0',
		port: 3000,
		strictPort: true,
	},
}))
