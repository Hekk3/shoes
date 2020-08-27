const track = document.querySelector('.track');
const btnPrev = document.querySelector('.btnPrev');
const btnMiddle = document.querySelector('.btnMiddle');
const btnMiddle2 = document.querySelector('.btnMiddle2');
const btnNext = document.querySelector('.btnNext');
const item = document.querySelectorAll('.item');
let position = 0;
let width = item[0].clientWidth;

let moveTrack = () => {
	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn = () => {
	// check buttons - check when the button need stops

	position === 0 ? btnPrev.style.pointerEvents = "none" : btnPrev.style.pointerEvents = "auto" ;
	position === -width ? btnMiddle.style.pointerEvents = "none" : btnMiddle.style.pointerEvents = "auto" ;
	position === -width * 2 ? btnMiddle2.style.pointerEvents = "none" : btnMiddle2.style.pointerEvents = "auto" ;
	position === -width * 3 ? btnNext.style.pointerEvents = "none" : btnNext.style.pointerEvents = "auto" ;

	// add other color, on the elem, that was chose, esle color = default
	position === 0 ? btnPrev.style.background = "#D7B399" : btnPrev.style.background = "#CECECE" ;
	position === -width ? btnMiddle.style.background = "#D7B399" : btnMiddle.style.background = "#CECECE" ;
	position === -width * 2 ? btnMiddle2.style.background = "#D7B399" : btnMiddle2.style.background = "#CECECE" ;
	position === -width * 3 ? btnNext.style.background = "#D7B399" : btnNext.style.background = "#CECECE" ;
}

btnNext.addEventListener('click', () => {
	position = -width * 3; // take width the item;

	moveTrack();
	checkBtn();
});

btnMiddle.addEventListener('click', () => {
	position = -width; // take width the item;

	moveTrack();
	checkBtn();
});

btnMiddle2.addEventListener('click', () => {
	position = -width * 2; // take width the item;

	moveTrack();
	checkBtn();
});

btnPrev.addEventListener('click', () => {
	position = 0; // take width the item;

	moveTrack();
	checkBtn();
});