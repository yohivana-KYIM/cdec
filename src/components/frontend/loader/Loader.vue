<template>
  <div class="container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
@import "../../../css/accueil.css";
* {
  padding: 0;
  margin: 0;
  font-family: "Work Sans";
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(50, 76, 156, 1);
}
.spinner {
  width: 80px;
  height: 80px;
  border: 7px solid rgba(220, 165, 16, 1);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinner 0.7s linear infinite;
}
@keyframes spinner {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}
/* Ajoutez vos styles spécifiques ici */
</style>
