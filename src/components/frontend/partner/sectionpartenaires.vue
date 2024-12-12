<template>
  <section class="section_partenaire">
    <div class="divider">Nos partenaires</div>
    <div class="img_group_partenaire">
      <!-- <img src="assets/cnps.png" alt="">
            <img src="assets/dgi.png" alt="">
            <img src="assets/eneo.png" alt=""> -->
      <div id="owl-demo" class="owl-carousel owl-theme">
        <div class="item">
          <img src="../../../assets/cnps.png" />
        </div>
        <div class="item">
          <img src="../../../assets/eneo.png" />
        </div>
        <div class="item">
          <img src="../../../assets/dgi.png" />
        </div>
        <div class="item">
          <img src="../../../assets/cnps.png" />
        </div>
        <div class="item">
          <img src="../../../assets/dgi.png" />
        </div>
        <div class="item">
          <img src="../../../assets/eneo.png" />
        </div>
      </div>
    </div>
    <!-- <div class="map_responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4986.446704145126!2d11.530665408510849!3d3.8802347473682754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc5ba563d87b5%3A0x28c3cb857f48ccd8!2sONG%20CDEC!5e0!3m2!1sfr!2scm!4v1719245705095!5m2!1sfr!2scm" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
    <div class="img_group_partenaire"></div>
  </section>
</template>

<script></script>
<style scoped>
@import "../../../css/actualites.css";

.section_partenaire {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(246, 248, 247, 1);
}

.section_partenaire .img_group_partenaire img {
  width: 100%;
  height: 100%;
}

.img_group_partenaire {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2em;
}
</style>
