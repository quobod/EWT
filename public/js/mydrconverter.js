if (getElement('drconverterModal')) {
	const drconverterModal = getElement('drconverterModal');
	const submitter = getElement('submitDrconverterData');
	const num = getElement('num');
	const label = getElement('num-label');
	const selector = getElement('dr-selector');
	const modalOpener = getElement('drconverter-opener');
	const modalCloser = getElement('drconverter-closer');
	const displayResults = (el) => {
		clearElements(getElement('content'));
		drconverterModal.style.display = "none";
		getElement('content').innerHTML = el;
	};	
	
	let index,
		options,
		selected;
	
	// Selector Handler
	addHandler(selector, 'change', () => {
		index = selector.selectedIndex;
		options = selector.options;
		selected = options[index].text.toLowerCase();
		
		switch(selected) {
			case 'degrees to radians':
				label.innerText = 'Degrees To Radians';
			break;
			
			case 'radians to degrees':
				label.innerHTML = 'Radians To Degrees';
			break;
		}
	});
	
	// Submitter Handler
	addHandler(submitter, 'click', () => {
		if (num.value) {
			let results;
			
			switch(selected) {
				case 'degrees to radians':
					results = `${num.value}° Equals ${toRad(num.value).toFixed(2)} Radians`;
				break;
				
				case 'radians to degrees':
					results = `${num.value} Radians Equals ${toDeg(num.value).toFixed(2)}°`;
				break;
			}
			
			const pResults = `<p class="p-dr-converter-results">${results}</p>`;
			
			displayResults(pResults);
		}
	});
	
	// Modal Open & Close Handlers
	addHandler(modalOpener, 'click', () => {		
		index = selector.selectedIndex;
		options = selector.options;
		selected = options[index].text.toLowerCase();
		
		switch(selected) {
			case 'degrees to radians':
				label.innerText = 'Degrees To Radians';
			break;
			
			case 'radians to degrees':
				label.innerHTML = 'Radians To Degrees';
			break;
		}
		drconverterModal.style.display = "block";
	});
	
	addHandler(modalCloser, 'click', () => {
		clearElements(getElement('content'));
		getElement('content').innerHTML = contentInnerHtml;
		drconverterModal.style.display = "none";
	});
}