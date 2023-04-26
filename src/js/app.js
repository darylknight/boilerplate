// Import CSS for Vite. Path is relative to this JS file
import '../pcss/app.pcss'

//
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
//

/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html & https://nystudio107.com/docs/vite/
 */
if (import.meta.hot) {
	import.meta.hot.accept(() => {
		console.log('HMR')
	})
}
