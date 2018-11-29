let slides = document. getElementsByClassName("gallery")[0].children;
let numImages = slides.length;
let current = nextImageIndex();
let last;
slides[current].style.opacity = 1;

setInterval(function() {
  last = current;
  current = nextImageIndex();
  slides[last].style.opacity = 0;  
  slides[current].style.opacity = 1;
}, 5000);

function nextImageIndex() {
	return Math.floor(Math.random() * numImages);
}