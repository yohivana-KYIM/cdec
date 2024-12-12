<template>
  <section class="start_section">
    <h1 class="titre_actualite">Le voile levé sur les missions de la CDEC</h1>
    <p>
      NBCUniversal’s Paris Games coverage will show how Search, Google Maps
      Platform and Gemini help make it easier to explore and learn more about
      the Games.
    </p>
    <span class="date_article"> 24 Juillet 2024 </span>
    <div class="section_author">
      <div class="info_author">
        <img src="../../../assets/user.jpg" alt="" />
        <div>
          <span class="author">Nom auteur</span>
          <span class="poste_author">Poste auteur</span>
        </div>
      </div>
      <div class="share">
        <i class="fa-solid fa-square-share-nodes"></i>
        <span>Partage</span>
      </div>
    </div>
    <div class="img_background"></div>
    <div class="body_article">
      <p class="introduction">
        Millions are getting ready to watch the world’s top athletes compete in
        Paris. And if you’re tuning in from the U.S., you’ll get to see Team USA
        athletes — like Dani Aravich, Jagger Eaton, Ilona Maher, Victor
        Montalvo, Kelsey Plum and Fred Richard — try out our latest features.
        Today, we’re announcing a partnership with Team USA and NBCUniversal
        that will spotlight helpful Google features in NBCUniversal’s Olympic
        and Paralympic coverage across broadcast, online and social. With the
        help of Team USA athletes and NBC talent, we’ll show how our latest
        advancements in Search, Google Maps Platform and Gemini can make it
        easier to explore and learn about the Olympic and Paralympic Games.
      </p>
      <h2>Titre 1</h2>
      <p class="introduction">
        Millions are getting ready to watch the world’s top athletes compete in
        Paris. And if you’re tuning in from the U.S., you’ll get to see Team USA
        athletes — like Dani Aravich, Jagger Eaton, Ilona Maher, Victor
        Montalvo, Kelsey Plum and Fred Richard — try out our latest features.
        Today, we’re announcing a partnership with Team USA and NBCUniversal
        that will spotlight helpful Google features in NBCUniversal’s Olympic
        and Paralympic coverage across broadcast, online and social. With the
        help of Team USA athletes and NBC talent, we’ll show how our latest
        advancements in Search, Google Maps Platform and Gemini can make it
        easier to explore and learn about the Olympic and Paralympic Games.
      </p>
      <h2>Titre 2</h2>
      <p class="introduction">
        Millions are getting ready to watch the world’s top athletes compete in
        Paris. And if you’re tuning in from the U.S., you’ll get to see Team USA
        athletes — like Dani Aravich, Jagger Eaton, Ilona Maher, Victor
        Montalvo, Kelsey Plum and Fred Richard — try out our latest features.
        Today, we’re announcing a partnership with Team USA and NBCUniversal
        that will spotlight helpful Google features in NBCUniversal’s Olympic
        and Paralympic coverage across broadcast, online and social. With the
        help of Team USA athletes and NBC talent, we’ll show how our latest
        advancements in Search, Google Maps Platform and Gemini can make it
        easier to explore and learn about the Olympic and Paralympic Games.
      </p>
      <h2>Titre 3</h2>
      <p class="introduction">
        Millions are getting ready to watch the world’s top athletes compete in
        Paris. And if you’re tuning in from the U.S., you’ll get to see Team USA
        athletes — like Dani Aravich, Jagger Eaton, Ilona Maher, Victor
        Montalvo, Kelsey Plum and Fred Richard — try out our latest features.
        Today, we’re announcing a partnership with Team USA and NBCUniversal
        that will spotlight helpful Google features in NBCUniversal’s Olympic
        and Paralympic coverage across broadcast, online and social. With the
        help of Team USA athletes and NBC talent, we’ll show how our latest
        advancements in Search, Google Maps Platform and Gemini can make it
        easier to explore and learn about the Olympic and Paralympic Games.
      </p>
    </div>

    <!-- <img class="img_background" src="assets/actualite2.jpeg" alt=""> -->
  </section>

  <section class="section_actualite">
    <div class="liste_actualite">
      <div class="divider">Dernières Actualités</div>
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
/* @import "../../../css/actualites.css";
@import "../../../css/presentation_actualite.css"; */
</style>
