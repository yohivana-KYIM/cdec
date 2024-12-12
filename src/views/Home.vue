<template>
  <div class="home">
    <!-- Loader component for displaying loading state -->
    <!-- <Loader :isLoading="isLoading" /> -->
    <carrousel />
    <services />
    <Domaine />
    <Dg />
    <indicateur />
    <ActualiteSection />
    <sectionpartenaires />
  </div>
</template>

<script setup>
import carrousel from "../components/frontend/carrousel/carrousel.vue";
import services from "../components/frontend/sercices/services.vue";
import indicateur from "../components/frontend/indicateur/indicateur.vue";
import Domaine from "../components/frontend/Domaine/Domaine.vue";
import sectionpartenaires from "../components/frontend/partner/sectionpartenaires.vue";
import Dg from "../components/frontend/Dg/Dg.vue";
import ActualiteSection from "../components/frontend/ActualiteSection/ActualiteSection.vue";
</script>

<style scoped>
@import "../css/accueil.css";

/* Autres styles ici */
</style>
