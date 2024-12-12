<template>
  <div class="containers">
    <div class="arrow l" onclick="prev()">
      <img src="../assets/l.png" alt="l" />
    </div>
    <div class="slide slide-1">
      <div class="caption">
        <h3 data-text="Bienvenue à la Caisse des Dépôts et Consignations"></h3>
        <p
          data-text="Des services de consignation et de dépôt fiables pour votre tranquillité d'esprit."
        ></p>
      </div>
    </div>
    <div class="slide slide-2">
      <div class="caption">
        <h3 data-text="La Banque, les Administrations Publiques"></h3>
        <p data-text=" Au coeur de la finance camerounaise"></p>
      </div>
    </div>
    <div class="slide slide-3">
      <div class="caption">
        <h3 data-text="Sécurisez Vos Économies avec la CDEC Cameroun"></h3>
        <p
          data-text="Des solutions sur mesure pour la gestion de vos finances personnelles et professionnelles."
        ></p>
      </div>
    </div>
    <div class="arrow r" onclick="next()">
      <img src="../assets/r.png" alt="r" />
    </div>
  </div>
</template>

<style scoped>
.containers {
  position: relative;
  background: #aad5f6;
  -webkit-animation-name: trans_body;
  -webkit-animation-duration: 40s;
  animation-name: trans_body;
  animation-duration: 1.5s;
}
@-webkit-keyframes trans_body {
  from {
    transform: translateX(2000px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes trans_body {
  from {
    transform: translateX(2000px);
  }
  to {
    transform: translateX(0px);
  }
}

.slide-1 {
  background: url("../assets/img3.jpg");
}
.slide-2 {
  background: url("../assets/img4.jpg");
}
.slide-3 {
  background: url("../assets/img5.jpg");
}

.slide {
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow-x: hidden;
}
.caption {
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px 0px;
}
.caption h3 {
  color: #fff;
  text-align: center;
  font-size: 3em;
  padding: 18px;
}
.caption p {
  max-width: 600px;
  width: 90%;
  margin: 0px auto;
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 600;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transform: background 500ms;
}
.arrow img {
  width: 50px;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.4);
}
.l {
  left: 0;
}
.r {
  right: 0;
}
</style>
