//
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
//

document.addEventListener('DOMContentLoaded', function () {
	// ? Videos
	// Loop through all video blocks and add an aspect ratio class
	const videos = document.querySelectorAll('.video-container iframe')
	for (const row of videos) {
		row.classList.add('w-full', 'aspect-video')
	}

	// ? Freeform
	// Use JS to remove and add the right button classes to Freeform submit button
	// Yes, it's hacky - but the alternative is maintaining a Freeform template
	const formButtons = document.querySelectorAll('form button')
	const formRows = document.querySelectorAll('form .flex')
	const formFields = document.querySelectorAll('form input')
	const formAreas = document.querySelectorAll('form textarea')

	// https://css-tricks.com/a-bunch-of-options-for-looping-over-queryselectorall-nodelists/#aa-for-of
	for (const button of formButtons) {
		button.classList.remove(
			'bg-blue-500',
			'hover:bg-blue-700',
			'text-white',
			'font-bold',
			'py-2',
			'px-4',
			'rounded',
			'mr-2'
		)
		button.classList.add('btn')
	}

	// Loop through Freeform rows and change the margins
	for (const row of formRows) {
		row.classList.remove('mb-6')
		row.classList.add('mb-2')
	}

	// Loop through Freeform inputs and change the borders
	for (const input of formFields) {
		input.classList.remove('border-gray-200', 'rounded')
		input.classList.add('border-2')
	}

	// Loop through Freeform inputs and change the borders
	for (const textarea of formAreas) {
		textarea.classList.remove('border-gray-200', 'rounded')
		textarea.classList.add('border-2')
	}
})
