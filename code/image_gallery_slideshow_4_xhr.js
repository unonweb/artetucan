// FUNCTIONS

function createSlides(imgs) {

	console.log('createSlides() called');

	let slidesContainer = document.getElementById('slides-container');
	let counter = 1;

	for (const img of imgs) {

		let newSlide = document.createElement('div');
		newSlide.classList = 'slides';
		
		let newCount = document.createElement('div');
		newCount.classList = 'count';
		newCount.innerHTML = counter;
		
		let newImg = document.createElement('img');
		newImg.src = img.src;
		newImg.style.width = "100%"

		newSlide.appendChild(newCount);
		newSlide.appendChild(newImg);
		slidesContainer.appendChild(newSlide);

		counter++;
	}
}

function createThumbnails(imgs) {

	console.log('createThumbnails() called');

	let thumbnailRow = document.getElementById('thumbnail-row');
	var count;
	// for (const img of imgs) {
	for (i=0; i < imgs.length; i++) {
		
		let newTmbnlColumn = document.createElement('div');
		newTmbnlColumn.classList = 'thumbnail-column';

		let newImg = document.createElement('img');
		newImg.classList = 'thumbnail cursor';
		newImg.src = imgs[i].src;
		newImg.alt = imgs[i].alt;
		newImg.style.width = "100%"
		newImg.addEventListener('click', function() {
			jumpToSlide(this);
		}.bind(i));

		newTmbnlColumn.appendChild(newImg);
		thumbnailRow.appendChild(newTmbnlColumn);
	}
	count++;
}

function nextSlide() {
    g.slideIndex++;
    // jump to beginning when reaching the end:
	if (g.slideIndex > g.slides.length) {g.slideIndex = 1}
	console.log(`nextSlide: slideIndex = ${g.slideIndex}`);
	showSlides(g.slideIndex);
}
function prevSlide() {
    g.slideIndex--;
    // jump to end when reaching the beginning:
	if (g.slideIndex < 1) {g.slideIndex = g.slides.length}
	console.log(`prevSlide: slideIndex = ${g.slideIndex}`);
	showSlides(g.slideIndex);
}
function jumpToSlide(n) {
// Thumbnail image controls
    n++;
    g.slideIndex = n;
    console.log(`jumpToSlide: slideIndex = ${g.slideIndex}`)
    showSlides(g.slideIndex);
}

function showSlides(slideIndex) {
	
	console.log('showSlides called');
    //console.log('showSlides: g.slideIndex before treatment: ', slideIndex)
	//console.log('showSlides: g.slideIndex after treatment: ', slideIndex)
	
	// hide all slides
	for (const slide of g.slides) {
		slide.style.display = "none";
	}
	// make all thumbnails opaque again
	for (const thumbnail of g.thumbnails) {
		thumbnail.className = thumbnail.className.replace(" active", "");
	}
	// current slide (both arrays are counting from 0):
	g.slides[slideIndex-1].style.display = "block";
	g.thumbnails[slideIndex-1].className += " active";
	g.caption.innerHTML = g.thumbnails[slideIndex-1].alt;
}


// ACTION

// VARIABLES

function requestImgs() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '/code/imgs.json', 'false');
	xhr.responseType = 'json';
	xhr.send();
	return xhr;
}

document.addEventListener('DOMContentLoaded', () => {
	
	let xhr = requestImgs();
	xhr.onload = function() {
		const imgs = xhr.response;
		console.log('Received imgs: ', imgs);
	
		createThumbnails(imgs);
		createSlides(imgs);
		
		g = {};
		g.slideIndex = 1;
		g.slides = document.getElementsByClassName("slides");
		g.thumbnails = document.getElementsByClassName("thumbnail");
		g.caption = document.getElementById("caption");
		console.log(`${g.slides.length} slides found.`)
		console.log(`${g.thumbnails.length} thumbnails found.`)
	
		showSlides(g.slideIndex);
	}
	
});

window.addEventListener('keydown', function(event) {
	switch(event.code) {
		case "ArrowLeft":
			prevSlide()
			break;
		case "ArrowRight":
			nextSlide();
			break;
	}
});


/*
let imgs = [];
imgs.push("http://franirwin.com/wp-content/uploads/2012/04/2-birds.jpg");
imgs.push("http://lafeber.com/pet-birds/wp-content/uploads/PeachFacedLovebirds.jpg");
imgs.push("http://www.capemaytimes.com/birds/pictures/2011/doyle-veery450.jpg");
imgs.push("http://www.kansasbirds.com/backyard/images/mountain_bluebird2_male.jpg");
*/



/*
i = 0; i < slides.length; i++
	slides[i].style.display = "none";
i = 0; i < dots.length; i++
		dots[i].className = dots[i].className.replace(" active", "");

*/