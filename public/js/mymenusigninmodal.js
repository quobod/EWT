/* Menu Signin Functionality */

if (getElement('signin-opener')) {
	if (document.querySelector('#signinModal')) {
		const signinOpener = getElement('signin-opener');
		const signinCloser = getElement('signin-closer');
		const signinModal = getElement('signinModal');
		
		/* Event Handlers */
		
		addHandler(signinOpener, 'click', () => {
			signinModal.style.display = "block";			
		});
		
		addHandler(signinCloser, 'click', () => {
			signinModal.style.display = "none";
		});
	}
}