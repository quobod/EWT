/* Chart Functionality */

	
if (document.querySelector('#mychartDataModal')) {
	
	// Chart Data Form Add Utility
	const chartFormAddBtn = getElement('chart-form-add-btn');
	const chartD = getElement('chart-d');
	const chartData = getElement('chart-data');
	const chartLabel = getElement('chart-label');
		
	addHandler(chartFormAddBtn, 'click', () => {		
		if (chartData.value.length > 0 && chartLabel.value.length > 0) {
			const inputCount = childCount(chartD);
			const lbl = newElement('input');
			const data = newElement('input');
			const remove = newElement('span');
			const div = newElement('div');
			
			// Add Element
			appendElement(chartD, div);
			appendElement(div, lbl);
			appendElement(div, data);
			appendElement(div, remove);
			
			// Add Attribute
			addAttribute(div, 'id', `div${inputCount + 1}`);
			addAttribute(div, 'class', 'input-data');
			addAttribute(remove, 'class', 'far fa-trash-alt remove');
			addAttribute(remove, 'cursor', 'pointer');
			addAttribute(remove, 'style', 'padding: 0; margin: 0.2rem 0 0 0;');
			addAttribute(remove, 'id', `${inputCount + 1}`);
			addAttribute(lbl, 'placeholder', 'Enter label name');
			addAttribute(lbl, 'class', 'label');
			addAttribute(lbl, 'value', chartLabel.value);
			addAttribute(data, 'placeholder', 'Enter data');
			addAttribute(data, 'class', 'data');
			addAttribute(data, 'value', chartData.value);
			
			chartLabel.value = '';
			chartData.value = '';
		} else {
			alert('Enter label and the data');
		}
	});
	
	// Chart Data Form Submit
	
	// Chart Data Modal
	const dataChart = document.querySelector('#mychartDataModal');
	const chartOpener = document.querySelector('.chart-opener');
	const chartCloser = document.querySelector('.chart-closer');
	
	/* addAttribute(dataChart, 'transition', 'all 0.5s ease-out'); */
	
	addHandler(chartOpener, 'click', () => {
		dataChart.style.display = "block";
		const inputs = getInputElements(getElement('chart-d'));
		
	});
	
	addHandler(chartCloser, 'click', () => {
		clearElements(getElement('chart-d'));
		dataChart.style.display = "none";
		if (childCount(getElement('chart-d')) == 0) {
			clearElements(getElement('content'));
			getElement('content').innerHTML = contentInnerHtml;
		}
	});
	
	window.onclick = function(event) {
		if (event.target == document) {
			clearElements(getElement('chart-d'));
			dataChart.style.display = "none";
		}
	}	
}

window.onclick = (e) => {
	// alert(`${e.target}\n${e.target.nodeName}\n${e.currentTarget}\n${e.target.id}`);
	if (e.target.id && e.target.nodeName.toString().toLowerCase() == 'svg') {
		// alert(`${e.target}\n${e.target.nodeName}\n${e.currentTarget}\n${e.target.id}`);
		removeElement(getElement('chart-d'), getElement(`div${e.target.id}`));
	}	
};

if (getElement('submitChartData')) {

	const chartFormSubmitBtn = getElement('submitChartData');
	addHandler(chartFormSubmitBtn, 'click', () => {
		const datum = childCount(getElement('chart-d'));
		if (datum > 0) {
			const canvas = newElement('canvas');
			const chart = getElement('chart-d');
			const labels = [];
			const datas = [];
			const colors = [];
			const borderColors = [];
			const backgroundColors = [];
			const borderWidth = 1;
			const label = 'Your Chart';
			
			addAttribute(canvas, 'class', 'bar-chart');
			
			clearElements(getElement('content'));
			appendElement(getElement('content'), canvas);
			
			for(let i = 0; i < datum; i++) {
				let el = chart.childNodes[i];
				labels.push(el.childNodes[0].value);
				datas.push(el.childNodes[1].value);
				if (i % 2 == 0) {
					backgroundColors.push('rgba(255, 99, 132, 0.8)');
					borderColors.push('rgba(255,99,132,1)');
					colors.push('rgb(200, 200, 250)');	
				} else {
					backgroundColors.push('rgba(54, 162, 235, 0.8)');			
					borderColors.push('rgba(54, 162, 235, 1)');
					colors.push('rgb(200, 250, 20)');	
				}
			}
			
			const myChart = new Chart(canvas, {
				type: 'bar',
				data: {
					labels,
					datasets: [{
						label: label,
						data: datas,
						backgroundColor: backgroundColors,
						borderColor: borderColors,
						borderWidth: borderWidth,
						radius: 1,
						
					}],
				},
				options: {
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							fontSize: 14,
							fontColor: '#eee'
						}
					},
					title: {
						display: true,
						text: 'Data Graph',
					},
					scales: {
						xAxes: [{
							// type: 'linear',
							// position: 'bottom',
							ticks: {
								beginAtZero:true
							  // min: -1,
							  // max: 8,
							  // stepSize: 1,
							  // fixedStepSize: 1,
							},
							gridLines: {
							  color: 'rgb(171,171,171)',
							  lineWidth: 2
							}
						}],
						yAxes: [{
							ticks: {
								beginAtZero:true
							},
							gridLines: {
							  color: 'rgb(171,171,171)',
							  lineWidth: 2
							}
						}]
					},
					annotation: {
						annotations: [{
							type: 'box',
							yScaleID: 'y-axis-0',
							yMin:  1,
							yMax: 4,
							borderColor: 'rgb(255, 51, 51)',
							borderWidth: 2,
							backgroundColor: 'rgb(255, 51, 51)',
						}]
					}
				}
			});
			
			getElement('mychartDataModal').style.display = 'none';
		}
	});
}