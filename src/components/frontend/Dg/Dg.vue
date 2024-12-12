<template>
  <section class="section_dg">
    <div class="divider">Le Directeur Général</div>
    <div class="dg_information">
      <div class="dg_image">
        <img src="../../../assets/dg.png" alt="" />
        <div class="content_dg">
          <h1>Nom du Président</h1>
        </div>
      </div>
      <div class="discours_dg">
        <h2>En savoir plus sur la CDEC</h2>
        <span>"</span>
        <p>
          Une caisse de dépôts et consignations n’a même pas vocation à faire de bénéfices. Elle est là pour combler les défaillances du marché. Elle a ses aspects positifs qu’on ne peut pas négliger. Mais, ces aspects positifs ne peuvent perdurer que si des actions pertinentes sont faites
        </p>
        <span>"</span>
        <button>En savoir plus..</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
@import "../../../css/accueil.css";

/* .discours_dg p {
  font-weight: 400;
  font-style: italic;
  font-size: 1em;
  color: rgba(255, 255, 255, 1);
  padding: 0 2em;
  text-align: center;
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .dg_information {
    flex-direction: column;
    width: 100%;
  }

  .dg_image {
    width: 100%;
    max-width: 500px;
  }

  .discours_dg {
    width: 100%;
    max-width: 500px;
  }

  .discours_dg:hover {
    transform: scale(1.05);
  }

  .content_dg h1 {
    font-size: 2em;
  }

  .discours_dg p {
    line-height: 1.8;
    padding: 0 1.5em;
    margin: 1em 0;
  }
}

@media screen and (max-width: 480px) {
  .dg_information img {
    height: 350px;
  }

  .discours_dg h2 {
    font-size: 1.3em;
  }

  .discours_dg span {
    font-size: 2em;
  }

  .discours_dg p {
    padding: 0 1em;
    font-size: 0.95em;
    line-height: 2;
    letter-spacing: 0.5px;
  }

  .discours_dg button {
    width: 70%;
  }

  .content_dg h1 {
    font-size: 1.5em;
  }
} */

/* .section_dg {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23DCA510'/%3E%3Cstop offset='1' stop-color='%23324C9C'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23324C9C'/%3E%3Cstop offset='1' stop-color='%23DCA510'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
}

.dg_image {
  width: 600px;
  position: relative;
  -webkit-animation-name: trans;
  -webkit-animation-duration: 40s;
  animation-name: trans;
  animation-duration: 5s;
}

@-webkit-keyframes trans {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes trans {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0px);
  }
}

.content_dg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  opacity: 0;
}

.content_dg:hover {
  opacity: 1;
}

.content_dg h1 {
  font-size: 3em;
  color: #fff;
  margin-bottom: 15px;
  font-weight: 600;
}

.content_dg > * {
  transform: translateY(25px);
  transition: transform 0.6s;
}

.content_dg:hover > * {
  transform: translateY(0px);
}

.dg_information {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 70px;
  gap: 20px;
}

.dg_information img {
  margin: auto;
  width: 100%;
  height: 550px;
  border-radius: 2px;
  background-size: cover;
  z-index: 000;
}

.discours_dg {
  width: 45%;
  padding: 1em;
  background: rgba(50, 76, 156, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 1s all;
}

.discours_dg:hover {
  background-color: rgba(220, 165, 16, 1);
  transform: scale(1.1);
}

.discours_dg h2 {
  font-weight: 700;
  font-size: 2em;
  line-height: 38.71px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

.discours_dg span {
  color: rgba(255, 255, 255, 1);
  font-size: 3em;
} */

/* .discours_dg p {
  font-weight: 400;
  font-style: italic;
  font-size: 1em;
  color: rgba(255, 255, 255, 1);
  padding: 0 2em;
  text-align: justify;
}

.discours_dg button {
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(50, 76, 156, 1);
  font-weight: 600;
  font-size: 1em;
  line-height: 21.11px;
  transition: 0.5s all;
  cursor: pointer;
}

.discours_dg button:hover {
  transform: translateY(-10px);
} */

/* Responsive Design */
/* @media screen and (max-width: 1200px) {
  .dg_image {
    width: 500px;
  }

  .dg_information img {
    height: 450px;
  }

  .discours_dg h2 {
    font-size: 1.7em;
  }
}

@media screen and (max-width: 992px) {
  .dg_image {
    width: 400px;
  }

  .dg_information img {
    height: 400px;
  }

  .discours_dg h2 {
    font-size: 1.5em;
    line-height: 30px;
  }

  .discours_dg p {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 768px) {
  .dg_information {
    flex-direction: column;
    width: 100%;
  }

  .dg_image {
    width: 100%;
    max-width: 500px;
  }

  .discours_dg {
    width: 100%;
    max-width: 500px;
  }

  .discours_dg:hover {
    transform: scale(1.05);
  }

  .content_dg h1 {
    font-size: 2em;
  }
}

@media screen and (max-width: 480px) {
  .dg_information img {
    height: 350px;
  }

  .discours_dg h2 {
    font-size: 1.3em;
  }

  .discours_dg span {
    font-size: 2em;
  }

  .discours_dg p {
    padding: 0 1em;
  }

  .discours_dg button {
    width: 70%;
  }

  .content_dg h1 {
    font-size: 1.5em;
  }
} */
</style>
