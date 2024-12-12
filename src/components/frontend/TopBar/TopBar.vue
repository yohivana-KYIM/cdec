// src/components/TopBar.vue
<template>
  <div class="top_bar">
    <div>
      <span>Caisse des Dépots Et Consignations</span>
    </div>
    <div class="button_lang">
      <button>Français</button>
      <button>Anglais</button>
    </div>
    <div class="form_topbar">
      <form action="" method="post">
        <input type="text" placeholder="Rechercher" />
        <button class="submit">
          <img src="../../../assets/search.png" alt="" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
/* Add your topbar styles here */
@import "../../../css/accueil.css";
</style>
