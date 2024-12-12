<template>
  <div>
    <!-- <div class="container">
      <div class="spinner"></div>
    </div> -->

    <header>
      <TopBar />
      <NavBar />
    </header>

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from "../navigation/NavBar.vue";

import TopBar from "../TopBar/TopBar.vue";
import Footer from "../footer/Footer.vue";

export default {
  name: "Layout",
  components: {
    NavBar,
    Footer,
    TopBar,
  },
};
</script>

<style scoped>
@import "../../../css/accueil.css";
/* Ajoutez des styles pour le layout si nécessaire */
</style>
