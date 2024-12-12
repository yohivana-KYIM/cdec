<template>
  <section class="body_actualite">
    <div class="titre_actualite">
      <h1>Communiqués CDEC</h1>
      <span>
        Retrouvez ici tous les communiqués relatifs aux activités de la CDEC
      </span>
    </div>
  </section>

  <section class="section_actualite">
    <div class="liste_actualite">
      <div class="divider">Tous les communiqués</div>

      <div
        class="div_communique"
        v-for="(row, rowIndex) in communiques"
        :key="rowIndex"
      >
        <div
          v-for="communique in row"
          :key="communique.id"
          class="single_communique"
        >
          <router-link :to="`/communique/${communique.id}`">
            <img src="../../assets/city2.jpg" :alt="communique.title" />
            <div class="content_dg">
              <div>
                <h1>{{ communique.title}}</h1>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      communiques: [
        [
          {
            id: 1,
            title:
              "Communiqués portant sur la réduction des procédures de consignations",
            image: "../../assets/city2.jpg",
          },
          {
            id: 2,
            title:
              "Communiqués portant sur la réduction des procédures de consignations",
            image: "../../assets/actualite1.jpeg",
          },
        ],
        [
          {
            id: 3,
            title:
              "Communiqués portant sur la réduction des procédures de consignations",
            image: "../../assets/actualite1.jpeg",
          },
          {
            id: 4,
            title:
              "Communiqués portant sur la réduction des procédures de consignations",
            image: "../../assets/actualite1.jpeg",
          },
        ],
      ],
    };
  },
};
</script>

<style scoped>
@import "../../../css/communique.css";
.body_actualite h1 {
  font-size: 5em;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}
.body_actualite span {
  font-size: 1.5em;
  text-align: center;
  color: #fff;
}
.section_actualite {
  width: 100%;
  animation: trans_service 3s ease;
}
@keyframes trans_service {
  from {
    transform: translateX(2000px);
  }
  to {
    transform: translateX(0px);
  }
}
.liste_actualite {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
