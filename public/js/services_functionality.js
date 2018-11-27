
/* Services Functionality 
 *	Dependencies: none
 *  
 *  
 *  
*/


// Capture the content element's innerHTML
let contentInnerHtml;

if (getElement('services')) {
	contentInnerHtml = getElement('content').innerHTML;
	getElement('drconverterModal').style.display = 'none';
	getElement('distanceCalculatorModal').style.display = 'none';
	getElement('mychartDataModal').style.display = 'none';
}

/* Close Button Functionality */

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