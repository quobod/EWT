
/* Countdown Functionality */

const startCountDown = (date = "Jan 31, 2019 00:37:25") => {
	// Set the date we're counting down to
	const countDownDate = new Date(date).getTime();

	// Update the count down every 1 second
	let x = setInterval(function() {

		// Get todays date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in their corresponding elements
		const htmlDays = document.querySelector('.days');
		const htmlHours = document.querySelector('.hours');
		const htmlMins = document.querySelector('.minutes');
		const htmlSecs = document.querySelector('.seconds');
	  
		htmlDays.innerHTML = `<p class="days-title">Days</p><p class="days-body">${days}</p>`;
		htmlHours.innerHTML = `<p class="hours-title">Hours</p><p class="hours-body">${hours}</p>`;
		htmlMins.innerHTML = `<p class="minutes-title">Minutes</p><p class="minutes-body">${minutes}</p>`;
		htmlSecs.innerHTML = `<p class="seconds-title">Seconds</p><p class="seconds-body">${seconds}</p>`;
	  

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	  }
	}, 1000);
};

if (document.querySelector('.day'),
	document.querySelector('.hour'),
	document.querySelector('.minute'),
	document.querySelector('.second')) {
	startCountDown();
}