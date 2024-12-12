<template>
  <section class="body_actualite">
    <div class="titre_actualite">
      <h1>Publications CDEC</h1>
      <span> Retrouver ici toutes les nouveautés concernant la CDEC </span>
    </div>
  </section>

  <section class="section_actualite">
    <div class="liste_actualite">
      <div class="divider">Toutes les publications</div>
      <div class="actualite_group">
        <div class="owl-carousel owl-theme caroussel_actualite">
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite1.jpeg" />
            </a>
            <h4>Lancement des Activités à la CDEC</h4>
            <span> Lun. 06 Mai 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite2.jpeg" />
            </a>
            <h4>Procédures de Consignations Administratives (Le Guide)</h4>
            <span> Mer. 24 Avril 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite3.jpeg" />
            </a>
            <h4>Le voile levé sur les missions de la CDEC</h4>
            <span> Mer. 17 Avril 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite1.jpeg" />
            </a>
            <h4>Lancement des Activités à la CDEC</h4>
            <span> Lun. 06 Mai 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite2.jpeg" />
            </a>
            <h4>Procédures de Consignations Administratives (Le Guide)</h4>
            <span> Mer. 24 Avril 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
          <div class="item_actualite">
            <a href="actualites.html">
              <img src="../../../assets/actualite3.jpeg" />
            </a>
            <h4>Le voile levé sur les missions de la CDEC</h4>
            <span> Mer. 17 Avril 2024 </span>
            <button>
              <router-link to="/actualites" class="text">
                Lire plus
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

onMounted(() => {
  $(".caroussel_actualite").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
</script>

<style>
@import "../../../css/presentation_actualite.css";
</style>
