
//Scrolling Feature

//Tries to set aniframe to the requestAnimationFrame method, if not 
//able, create a function that callsback every 60th of a second
var aniframe = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};

//Gets all animation objects
var scrollAnimateObj = document.querySelectorAll(".animate-on-scroll-fademove")

//Function that checks if an element is visible in the viewport
function isElementInViewport(e) {
	//Gets the bounding rectangle around div
	var rect = e.getBoundingClientRect();
	
	//Checks if its in bounds and return
	return (
		//Checks if top and bottom of the element for bounds
		(rect.top <= 0 &&
		rect.bottom >= 0)
		||
		(
		rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight)
		)
		||
		(
		rect.top >= 0 &&
		 rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		)
	);
}

//Function that checks each visible element
function animateCheck() {
	//loops through each static element for 
	for (x = 0; x < scrollAnimateObj.length; x++) {
		//Checks if element is in viewport
		if(isElementInViewport(scrollAnimateObj[x])) {
			//Make visible
			scrollAnimateObj[x].classList.add("animate-on-scroll-fademove-visible");
		} /*else {
			//Otherwise, hide
			scrollAnimateObj[x].classList.remove("animate-on-scroll-fademove-visible");
		}	*/
	}
	aniframe(animateCheck);
}

animateCheck();

//Above code credit to https://cssanimation.rocks/scroll-animations/ for base
