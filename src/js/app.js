// Import CSS for Vite. Path is relative to this JS file
import '../css/app.css'

//
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
window.Alpine = Alpine

Alpine.plugin(focus)
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
