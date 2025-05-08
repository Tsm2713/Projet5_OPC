const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");


//petits points (dots)
slides.forEach((_, index) => {	// Parcours chaque slide
	const dot = document.createElement("div");	// Création d’un nouveau <div>
	dot.classList.add("dot");	// Ajoute la classe .dot (style visuel)
	if (index === 0) {	// Si c'est le premier dot
		dot.classList.add("dot_selected");	// Ajoute classe spéciale pour marquer actif
	}
	dotsContainer.appendChild(dot);	// Ajoute le dot créé au HTML visible
});

let currentIndex = 0;

function updateSlide(index) {
	const image = document.querySelector(".banner-img");
	const text = document.querySelector("#banner p");
	const dots = document.querySelectorAll(".dot");

	//transition
	image.classList.add("fade-out");
	setTimeout(() => {
		image.src = `./assets/images/slideshow/${slides[index].image}`;
		text.innerHTML = slides[index].tagLine;
		image.classList.remove("fade-out");
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		dots[index].classList.add("dot_selected");
		currentIndex = index;
	}, 200);
}

//clic flèche gauche et droite
leftArrow.addEventListener("click", () => {
	const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
	updateSlide(newIndex);
});
rightArrow.addEventListener("click", () => {
	const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
	updateSlide(newIndex);
});






