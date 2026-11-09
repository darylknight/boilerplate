// Registered in init.js via a `[data-*]` selector.
// `els` is the NodeList of matching elements passed by init.js after lazy-loading this module.
export default (els) => {
	Array.prototype.forEach.call(els, (el) => {
		// code goes here
	})
}
