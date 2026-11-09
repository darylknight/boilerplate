// Called by app.js with `document` as the scope on DOMContentLoaded.
// Maps CSS selectors to dynamic imports of modules in ./modules/.
// Each module is only fetched if its selector matches an element in the scope.

const modules = {
	// '[data-example]': () => import('./modules/example'),
}

export default (scope) => {
	Object.keys(modules).forEach((selector) => {
		const request = modules[selector]

		;((els) => {
			if (els && els.length) {
				// Lazy-load the module, then invoke it with the matched elements.
				request().then(({ default: module }) => module(els))
			}
		})(scope.querySelectorAll(selector))
	})
}
