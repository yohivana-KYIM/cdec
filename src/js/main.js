// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
// });

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0; // Ajoutez cette variable pour suivre l'index actuel

// Fonction pour changer de diapositive
var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    
    currentIndex = manual; // Mettez à jour l'index actuel
}

// Ajout des événements de clic sur les boutons de navigation
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Fonction de défilement automatique
function autoSlide() {
    currentIndex++; // Incrémentez l'index
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Revenez à la première diapositive si vous dépassez le nombre de diapositives
    }
    sliderNav(currentIndex); // Changez la diapositive
}

// Définir l'intervalle pour le défilement automatique (par exemple, toutes les 3 secondes)
setInterval(autoSlide, 5000); // 3000 millisecondes = 3 secondes

// Initial display
sliderNav(currentIndex);
