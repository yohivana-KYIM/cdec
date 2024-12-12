// src/views/Accueil.vue
<template>
  <div>
    <!-- <Loader /> -->
    <header>
      <TopBar />
      <NavBar />
    </header>
    <containers />
    <Domaine />
    <Dg />
    <indicateur />
    <ActualiteSection />
    <sectionpartenaires />
    <services />
    <!-- <FlagCameroun /> -->
    <!-- <StartSection /> -->
    <carrousel />
    <!-- <partenaires /> -->

    <FooterComponent />
  </div>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import TopBar from "../components/TopBar.vue";
import carrousel from "../components/carrousel.vue";
import NavBar from "../components/NavBar.vue";
import containers from "../components/containers.vue";
import services from "../components/services.vue";
import indicateur from "../components/indicateur.vue";
// import partenaires from "../components/partenaires.vue";
// import FlagCameroun from "../components/FlagCameroun.vue";
// import StartSection from "../components/StartSection.vue";
import Domaine from "../components/Domaine.vue";
import sectionpartenaires from "../components/sectionpartenaires.vue";

import Dg from "../components/Dg.vue";
import ActualiteSection from "../components/ActualiteSection.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<style>
@import "../css/accueil.css";
</style>
