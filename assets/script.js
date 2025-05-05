const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Sélection du conteneur des dots
const dotsContainer = document.querySelector(".dots");

// Génère un dot pour chaque slide
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected"); // le premier est actif au départ
  }
  dotsContainer.appendChild(dot);
});

// Event listener sur la flèche gauche
leftArrow.addEventListener("click", () => {
  console.log("Clic sur la flèche gauche");
});

// Event listener sur la flèche droite
rightArrow.addEventListener("click", () => {
  console.log("Clic sur la flèche droite");
});

