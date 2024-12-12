<template>
  <Section class="service">
    <div class="divider">Services</div>
    <div class="service_group">
      <div class="service_information">
        <img class="star" src="../../../assets/consignation.png" alt="" />
        <hr />
        <span>Consignations Administratives</span>
        <p>
          Assurez-vous que vos démarches administratives respectent toutes les
          réglementations en vigueur grâce à notre service de consignations
          administratives
        </p>
        <button>
          <a> <router-link to="/cons_admin" class="li">En savoir plus.. </router-link></a>
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/renovation.png" alt="" />
        <hr />
        <span>Consignations Judiciaires</span>
        <p>
          Assurez-vous que vos démarches administratives respectent toutes les
          réglementations en vigueur grâce à notre service de consignations
          administratives
        </p>
        <button>
          <a> <router-link to="/cons_judiciaire" class="li">En savoir plus.. </router-link> </a>
        </button>
      </div>
      <div class="service_information">
        <img class="star" src="../../../assets/consultation.png" alt="" />
        <hr />
        <span>Consignations Conventionnelles</span>
        <p>
          Assurez-vous que vos démarches administratives respectent toutes les
          réglementations en vigueur grâce à notre service de consignations
          administratives
        </p>
        <button>
          <a> <router-link to="/cons_convention" class="li">En savoir plus.. </router-link></a>
        </button>
      </div>
    </div>
  </Section>
</template>

<script></script>

<style scoped>
@import "../../../css/accueil.css";

.service_information{
background: rgba(255, 255, 255, 1);
}

</style>
