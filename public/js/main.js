/* Callout Close Button Functionality *//* Close Button Functionality */

// Get all close buttons
const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach(btn => {
	addHandler(btn, 'click', () => {
		btn.parentElement.classList.add('fade-out');
		let timer = setTimeout(() => {
			removeElement(document.body, btn.parentElement);
			clearTimeout(timer);
		}, 500);
	});
});