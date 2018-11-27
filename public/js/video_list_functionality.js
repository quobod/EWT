
/* Video list Functionality 
 *	Dependencies: none
 *  
 *  
 *  
*/


// Register click event with all video item
if (document.querySelector('.video-list')) {
	const items = document.querySelectorAll('.list-item-link');
	
	items.forEach(item => {		
		item.addEventListener('click', () => {			
			const ytPlayer = document.querySelector('.yt-player');
			ytPlayer.src = `https://www.youtube.com/embed/${item.getAttribute('data-ytitem')}`;
		});
	});
}
