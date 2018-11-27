/* Distance Calculator Functionality */

if (document.querySelector('#distanceCalculatorModal')) {
	// Create the form interface
	const calculatorModal = document.querySelector('#distanceCalculatorModal');
	const calculatorOpener = document.querySelector('.calculator-opener');
	const calculatorCloser = document.querySelector('.calculator-closer');
	const calculatorSubmitBtn = document.querySelector('#submitCalculatorData');
	const calculate = (lat1, lon1, lat2, lon2, unit = "N") => {
		const toRad = (n) => n * Math.PI / 180;
		const toDeg = (n) => n * 180 / Math.PI;
		
		var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist.toFixed(2); 
	};
	
	/* Event Handlers */
	
	addHandler(calculatorOpener, 'click', () => {
		calculatorModal.style.display = "block";
		const inputs = getInputElements(getElement('calculator-d'));
		
	});
	
	addHandler(calculatorCloser, 'click', () => {
		clearElements(getElement('calculator-d'));
		calculatorModal.style.display = "none";
		if (childCount(getElement('chart-d')) == 0) {
			clearElements(getElement('content'));
			getElement('content').innerHTML = contentInnerHtml;
		}
		
		if (latitudeStart.value,
			longitudeStart.value,
			latitudeEnd.value,
			longitudeEnd.value) {
				latitudeStart.value = '';
				longitudeStart.value = '';
				latitudeEnd.value = '';
				longitudeEnd.value = '';
			}
	});
	
	// Capture the input data
	const latitudeStart = getElement('latitude-start');
	const longitudeStart = getElement('longitude-start');
	const latitudeEnd = getElement('latitude-end');
	const longitudeEnd = getElement('longitude-end');
	
	addHandler(calculatorSubmitBtn, 'click', () => {
		// Validate the input data
		if (latitudeStart.value,
			longitudeStart.value,
			latitudeEnd.value,
			longitudeEnd.value) {
			// All good, display the results
			clearElements(getElement('content'));
			getElement('content').innerHTML = `
				<div class="calc-results">
					<p class="calc-p">
						Distance is ${calculate(latitudeStart.value, longitudeStart.value, latitudeEnd.value, longitudeEnd.value)} Miles
					</p>
				</div>
			`;
			
			calculatorModal.style.display = "none";
		} else {
			// One or more input values invalid
			alert('no go');
		}
	});
	
}