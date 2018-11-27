/* Search Button Functionality */
	if (getElement('search-form')) {
	const searchForm = getElement('search-form');

	addHandler(getElement('search'), 'click', () => {
		searchForm.classList.toggle('show');
	});
}